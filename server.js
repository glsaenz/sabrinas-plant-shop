require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const products = require('./data/products.json');

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Create Stripe checkout session
app.post('/api/create-checkout-session', async (req, res) => {
  const { cartItems } = req.body;

  try {
    const lineItems = cartItems.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          description: item.latin,
          images: [`http://localhost:3000${item.image}`],
        },
        unit_amount: Math.round(item.price * 100), // Stripe uses cents
      },
      quantity: item.qty,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:3000/success.html',
      cancel_url: 'http://localhost:3000/cancel.html',
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Chat endpoint using Anthropic's API
const Anthropic = require('@anthropic-ai/sdk');
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;

  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: `You are a friendly plant expert assistant for Sabrina's Plant Shop. 
      Help customers choose the perfect plant based on their needs, experience level, 
      and living situation. Be warm, encouraging, and concise.
      
      Here is our current product catalogue:
      ${JSON.stringify(products.map(p => ({
        id: p.id,
        name: p.name,
        category: p.category,
        care: p.care,
        price: p.price,
        tags: p.tags,
        stock: p.stock
      })))}
      
      When recommending plants always mention the name, price, and care level.
      Only recommend plants that are in stock. Keep responses under 150 words.`,
      messages: [
        ...history,
        { role: 'user', content: message }
      ]
    });

    res.json({ reply: response.content[0].text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Chat failed' });
  }
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
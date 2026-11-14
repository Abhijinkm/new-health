/**
 * HEALTHCARE FOR YOU - Node.js Express Backend Server
 * Serves static assets and provides RESTful API endpoints for medical education data.
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const HEALTH_DATA = require('./data.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cache-busting headers for static content in development
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

// Serve Static Frontend Files
app.use(express.static(path.join(__dirname)));

/**
 * REST API ENDPOINTS
 */

// 1. Health check & Metadata
app.get('/api/health-check', (req, res) => {
  res.json({
    status: 'online',
    platform: 'HEALTHCARE FOR YOU',
    version: '2.0.0',
    totalDiseases: HEALTH_DATA.diseases.length,
    categoriesCount: HEALTH_DATA.categories.length,
    preventionGuidesCount: HEALTH_DATA.preventionGuides.length,
    timestamp: new Date().toISOString()
  });
});

// 2. Get All Categories
app.get('/api/categories', (req, res) => {
  res.json({
    success: true,
    count: HEALTH_DATA.categories.length,
    categories: HEALTH_DATA.categories
  });
});

// 3. Get Diseases (with optional search, category, and letter filters)
app.get('/api/diseases', (req, res) => {
  let diseases = [...HEALTH_DATA.diseases];
  const { category, search, letter } = req.query;

  if (category && category !== 'all') {
    diseases = diseases.filter(d => d.category === category);
  }

  if (letter && letter !== 'all') {
    diseases = diseases.filter(d => d.name.toUpperCase().startsWith(letter.toUpperCase()));
  }

  if (search) {
    const q = search.toLowerCase();
    diseases = diseases.filter(d => 
      d.name.toLowerCase().includes(q) ||
      (d.name_ml && d.name_ml.toLowerCase().includes(q)) ||
      (d.name_hi && d.name_hi.toLowerCase().includes(q)) ||
      (d.name_ar && d.name_ar.toLowerCase().includes(q)) ||
      (d.shortDesc && d.shortDesc.toLowerCase().includes(q)) ||
      (d.symptoms && d.symptoms.some(s => s.toLowerCase().includes(q)))
    );
  }

  res.json({
    success: true,
    totalCount: HEALTH_DATA.diseases.length,
    filteredCount: diseases.length,
    diseases
  });
});

// 4. Get Single Disease by ID
app.get('/api/diseases/:id', (req, res) => {
  const disease = HEALTH_DATA.diseases.find(d => d.id === req.params.id);
  if (!disease) {
    return res.status(404).json({
      success: false,
      error: 'Disease condition not found in repository.'
    });
  }
  res.json({
    success: true,
    disease
  });
});

// 5. Get Prevention Guides
app.get('/api/prevention', (req, res) => {
  res.json({
    success: true,
    count: HEALTH_DATA.preventionGuides.length,
    preventionGuides: HEALTH_DATA.preventionGuides
  });
});

// 6. Get Nutrition Plans & Foods
app.get('/api/nutrition', (req, res) => {
  res.json({
    success: true,
    nutrition: HEALTH_DATA.nutrition
  });
});

// 7. Get Articles & Blogs
app.get('/api/articles', (req, res) => {
  res.json({
    success: true,
    count: HEALTH_DATA.articles.length,
    articles: HEALTH_DATA.articles
  });
});

// 8. Contact Form Submissions Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, category, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message are required fields.'
    });
  }

  console.log(`[CONTACT INQUIRY] From: ${name} <${email}> | Category: ${category} | Subject: ${subject}`);

  res.json({
    success: true,
    message: 'Your inquiry has been successfully received by the medical editorial board.'
  });
});

// Fallback: All other routes serve index.html (SPA routing support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server with graceful port fallback
let currentPort = process.env.PORT || 3000;

function startServer(port) {
  const server = app.listen(port, '0.0.0.0', () => {
    console.log('====================================================');
    console.log(' HEALTHCARE FOR YOU - Server Online');
    console.log(` Web Server: http://localhost:${port}`);
    console.log(` API Endpoint: http://localhost:${port}/api/health-check`);
    console.log('====================================================');
  });

  server.on('error', (err) => {
    if ((err.code === 'EADDRINUSE' || err.code === 'EACCES') && port === 3000) {
      console.log(`Port 3000 is busy or restricted, automatically switching to port 8080...`);
      startServer(8080);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(currentPort);

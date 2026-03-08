const express = require('express');
const router = express.Router();
const { 
  getItems, 
  createItem,
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  sendMessage
} = require('../controllers/index');

// All these routes are under /api (see app.js: app.use('/api', routes))
router.post('/contact', sendMessage);  // Contact form route
// Items routes (keeping for reference)
router.get('/items', getItems);
router.post('/items', createItem);

// Projects routes - Full CRUD
router.get('/projects', getProjects);           // GET all projects
router.get('/projects/:id', getProjectById);    // GET one project
router.post('/projects', createProject);        // CREATE a project
router.put('/projects/:id', updateProject);    // UPDATE a project
router.delete('/projects/:id', deleteProject);  // DELETE a project

module.exports = router;
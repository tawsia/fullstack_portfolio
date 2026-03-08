const db = require('../db');
const nodemailer = require('nodemailer');

// ===== ITEMS (keeping for reference) =====
const getItems = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM items ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch items' });
  }
};

const createItem = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }
    const [result] = await db.query(
      'INSERT INTO items (name, description) VALUES (?, ?)',
      [name, description]
    );
    res.status(201).json({ id: result.insertId, name, description });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not create item' });
  }
};

// ===== PROJECTS CRUD =====

// GET all projects
const getProjects = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM projects ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch projects' });
  }
};

// GET one project by ID
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query('SELECT * FROM projects WHERE id = ?', [id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch project' });
  }
};

// POST create a new project
const createProject = async (req, res) => {
  try {
    const { title, description, image_url, github_link, live_link, tech_stack } = req.body;
    
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }
    
    const [result] = await db.query(
      'INSERT INTO projects (title, description, image_url, github_link, live_link, tech_stack) VALUES (?, ?, ?, ?, ?, ?)',
      [title, description, image_url || null, github_link || null, live_link || null, tech_stack || null]
    );
    
    res.status(201).json({ 
      id: result.insertId, 
      title, 
      description, 
      image_url, 
      github_link, 
      live_link, 
      tech_stack 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not create project' });
  }
};

// PUT update a project
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image_url, github_link, live_link, tech_stack } = req.body;
    
    // Check if project exists
    const [existing] = await db.query('SELECT * FROM projects WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    // Update project
    await db.query(
      'UPDATE projects SET title = ?, description = ?, image_url = ?, github_link = ?, live_link = ?, tech_stack = ? WHERE id = ?',
      [title, description, image_url || null, github_link || null, live_link || null, tech_stack || null, id]
    );
    
    res.json({ message: 'Project updated successfully', id: parseInt(id) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not update project' });
  }
};

// DELETE a project
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if project exists
    const [existing] = await db.query('SELECT * FROM projects WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    // Delete project
    await db.query('DELETE FROM projects WHERE id = ?', [id]);
    
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not delete project' });
  }
};

const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try{
    // Create a transporter using your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., Gmail, Outlook
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define the email options
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // Your email address
      subject: `Portfolio Contact from ${name}`,
      text:`
      Name: ${name},
      Email: ${email},
      Message: ${message}`,
    });
 res.json({success: true, message: 'Message sent successfully'});
  }catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Could not send message' });
  }
};
module.exports = {
  getItems,
  createItem,
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  sendMessage,
};

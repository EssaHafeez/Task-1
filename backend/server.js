const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Sample data
let companyInfo = { name: "Your Company Name", description: "Company Description" };
let teamMembers = [
    { id: 1, name: "John Doe", role: "Developer" },
    { id: 2, name: "Jane Smith", role: "Designer" },
    { id: 3, name: "Mike Johnson", role: "Project Manager" },
    { id: 4, name: "Sara Wilson", role: "Tester" },
    { id: 5, name: "Tom Brown", role: "Developer" },
    { id: 6, name: "Lucy Green", role: "Designer" }
];

// Routes
// Get Company Info
app.get('/api/company', (req, res) => {
    res.json(companyInfo);
});

// Get all team members
app.get('/api/team', (req, res) => {
    res.json(teamMembers);
});

// Get a single team member by ID
app.get('/api/team/:id', (req, res) => {
    const member = teamMembers.find(m => m.id === parseInt(req.params.id));
    if (!member) return res.status(404).send('Member not found');
    res.json(member);
});

// Add a new team member
app.post('/api/team', (req, res) => {
    const newMember = {
        id: teamMembers.length + 1,
        name: req.body.name,
        role: req.body.role
    };
    teamMembers.push(newMember);
    res.status(201).json(newMember);
});

// Update a team member
app.put('/api/team/:id', (req, res) => {
    const member = teamMembers.find(m => m.id === parseInt(req.params.id));
    if (!member) return res.status(404).send('Member not found');
    member.name = req.body.name;
    member.role = req.body.role;
    res.json(member);
});

// Delete a team member
app.delete('/api/team/:id', (req, res) => {
    const memberIndex = teamMembers.findIndex(m => m.id === parseInt(req.params.id));
    if (memberIndex === -1) return res.status(404).send('Member not found');
    teamMembers.splice(memberIndex, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require("express");
const app = express();
const instructor = require("./Models/instructor.js");
const student = require("./Models/student.js");
const course = require("./Models/course.js");
const db = require("./db.js");
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('hello')
})

const PORT = process.env.PORT || 3000
require('dotenv').config();

app.listen(PORT,()=>{
    console.log("server is running at 3000")
})

app.post('/student', async (req, res) => {
    try {
        const data = req.body;
        const newStudent = new student(data);
        const response = await newStudent.save();
        console.log("Data saved");
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/student',  async (req, res) => {
    try {
        const data = await student.find();
        console.log("Data fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})


app.post('/instructor', async (req, res) => {
    try {
        const data = req.body;
        const newInstructor = new instructor(data);
        const response = await newInstructor.save();
        console.log("Data saved");
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/instructor',  async (req, res) => {
    try {
        const data = await instructor.find();
        console.log("Data fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})

app.post('/course', async (req, res) => {
    try {
        const data = req.body;
        const newCourse = new course(data);
        const response = await newCourse.save();
        console.log("Data saved");
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/course',  async (req, res) => {
    try {
        const data = await course.find();
        console.log("Data fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})
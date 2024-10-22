const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   
    enrolledCourses: {
        type: String,
        enum: ['English', 'Hindi', 'Marathi' ],
        required: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    assignments: {
        type: String
    }
  
})

const student = mongoose.model('student', studentSchema);
module.exports = student;



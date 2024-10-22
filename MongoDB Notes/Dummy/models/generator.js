import mongoose from 'mongoose';

const genSchema = new mongoose.Schema({
    Name: String,
    Language: String,
    City: String,
    Salary: Number,
    isManager: Boolean,
});

export const Gen = mongoose.model('Gen', genSchema);

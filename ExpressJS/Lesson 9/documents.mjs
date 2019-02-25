import express from 'express';

export const documents = express.Router();

documents.get('/', (req, res) => {
    res.send([]);
});

documents.post('/', (req, res) => {
    res.send('Create document');
});

documents.get('/:id', (req, res) => {
    res.send({});
});

documents.put('/:id', (req, res) => {
    res.send('Update document');
});

documents.delete('/:id', (req, res) => {
    res.send('Delete document');
});

documents.get('/:id/gradeBook', (req, res) => {
    res.send({});
});

documents.post('/:id/gradeBook', (req, res) => {
    res.send('Create grade book');
});
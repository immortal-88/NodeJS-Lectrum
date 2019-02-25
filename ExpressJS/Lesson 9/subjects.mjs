import express from 'express';

export const subjects = express.Router();

subjects.get('/', (req, res) => {
    res.send([]);
});

// Subjects
subjects.post('/', (req, res) => {
    res.send('Create subject');
});

subjects.get('/:subjectId', (req, res) => {
    res.send({});
});

subjects.put('/:subjectId', (req, res) => {
    res.send('Subject updated');
});

subjects.delete('/:subjectId', (req, res) => {
    res.send('Subject deleted');
});

// Seasons
subjects.get('/:subjectId/seasons', (req, res) => {
    res.send([]);
});

subjects.post('/:subjectId/seasons', (req, res) => {
    res.send('Create season');
});

subjects.get('/:subjectId/seasons/:seasonId', (req, res) => {
    res.send({});
});

subjects.put('/:subjectId/seasons/:seasonId', (req, res) => {
    res.send('Season updated');
});

subjects.delete('/:subjectId/seasons/:seasonId', (req, res) => {
    res.send('Season deleted');
});

// Lessons
subjects.get('/:subjectId/seasons/:seasonId/lessons', (req, res) => {
    res.send([]);
});

subjects.post('/:subjectId/seasons/:seasonId/lessons', (req, res) => {
    res.send('Create lesson');
});

subjects.get('/:subjectId/seasons/:seasonId/lessons/:lessonId', (req, res) => {
    res.send({});
});

subjects.put('/:subjectId/seasons/:seasonId/lessons/:lessonId', (req, res) => {
    res.send('Lesson updated');
});

subjects.delete('/:subjectId/seasons/:seasonId/lessons/:lessonId', (req, res) => {
    res.send('Lesson deleted');
});
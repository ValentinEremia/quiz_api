const express = require('express');
const app = express();

const questions = [
    {
        id: 1,
        question: "Care sunt culorile drapelului României?",
        options: ["Roșu", "Galben", "Albastru", "Verde"],
        correctAnswers: [0, 1, 2]
    },
    {
        id: 2,
        question: "Care este capitala României?",
        options: ["București", "Cluj-Napoca", "Iași", "Timișoara"],
        correctAnswers: [0]
    },
    {
        id: 3,
        question: "Care este cel mai înalt munte din România?",
        options: ["Pădurea Neagră", "Muntele Bucegi", "Muntele Retezat", "Muntele Moldoveanu"],
        correctAnswers: [3]
    },
    {
        id: 4,
        question: "Care este cel mai mare lac din România?",
        options: ["Lacul Vidraru", "Lacul Roșu", "Lacul Izvorul Muntelui", "Lacul Sf. Ana"],
        correctAnswers: [2]
    },
    {
        id: 5,
        question: "Care este cel mai mare oraș din România?",
        options: ["București", "Cluj-Napoca", "Iași", "Timișoara"],
        correctAnswers: [0]
    }
];

app.get('/', (req, res) => {
    res.json(questions);
});

module.exports = app;

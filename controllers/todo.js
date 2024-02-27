const express = require('express');
const Router = express.Router();
const DB = require('../models/db');

Router.post('/addTodo', function (req, res) {
    console.log("req.body", req.body);
    const fromData = {
        title: req.body.title ? req.body.title : "",
    }
    DB.InsertDocument('todos', fromData, function (err, result1) {
        if (err) {
            return res.status(400).end();
        } else {
            return res.status(200).json(result1);
        }
    });
})

Router.get('/listTodo', function (req, res) {
    DB.GetDocument('todos', {}, {}, {}, function (err, result) {
        if (err) {
            return res.status(400).end();
        } else {
            return res.status(200).json(result);
        }
    });
});

Router.get('/viewTodo/:id', function (req, res) {
    DB.GetOneDocument('todos', { _id: req.params.id }, {}, {}, function (err, result) {
        if (err) {
            return res.status(400).end();
        } else {
            return res.status(200).json(result);
        }
    });
});


Router.post('/updateTodo/:id', function (req, res) {
    const fromData = {
        title: req.body.title,
    }
    DB.UpdateDocument('todos', { _id: req.params.id }, fromData, function (err, result) {
        if (err) {
            return res.status(400).end();
        } else {
            return res.status(200).json(result);
        }
    });
})

Router.get('/deleteTodo/:id', function (req, res) {
    console.log("req.params.id", req.params.id);
    DB.DeleteDocument('todos', { _id: req.params.id }, function (err, result) {
        if (err) {
            return res.status(400).end();
        } else {
            return res.status(200).json(result);

        }
    });
})

module.exports = Router;

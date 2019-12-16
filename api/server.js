const express = require('express');
const server = express();

const Artists = require('../artists/artistsModel.js');

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({
        "api": "it's aliiive!"
    })
});

server.get('/artists', (req, res) => {
    Artists.find()
        .then(artists => {
            res.status(200).json(artists);
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

server.post('/artists', (req, res) => {
    const artistData = req.body;
    Artists.add(artistData)
        .then(artist => {
            res.status(201).json(artist)
        })
        .catch(err => {
            res.status(500).json({
                err
            })
        })
})

server.delete('/artist/:id', (req, res) => {
    const {id} = req.params;
    Artists.remove(id)
        .then(deleted => {
            if(deleted) {
                res.status(200).json({
                    removed: deleted
                })
            } else {
                res.status(404).json({
                    message: 'Artist not found'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error trying to delete artist'
            })
        })
})
module.exports = server;
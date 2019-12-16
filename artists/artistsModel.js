const db = require('../data/db-config.js');

async function add(artist) {
    const [id] = await db('artists')
        .insert(artist);

    return db('artists').where({id}).first();
}

function remove(id) {
    return db('artists')
        .where({id})
        .del();
}

function find() {
    return db('artists');
}

function findById(id) {
    return db('artists')
    .where({id})
    .first();
}

module.exports = {
    add,
    remove,
    find,
    findById
}
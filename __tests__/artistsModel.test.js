const Artists = require('../artists/artistsModel.js');
const server = require('../api/server.js');
const db = require('../data/db-config.js');
const request = require('supertest');


describe('artists model', () => {
    describe('insert', () => {
        it('should insert the artists into the db', async () => {
            await Artists.add({name: 'James Hetfield'});
            // await Artists.add({name: 'Selena Gomez'});

            const artists = await db('artists');
            expect(artists).toHaveLength(1);
        });

        if('should check the name inserted artist', async () => {
            const artists = await db('artists');
            expect(artists).toHaveLength(0);
            
            console.log(artists);

            await add({
                name: 'Serj Takian'
            })
            const inserted = await db('artists')
            expect(inserted[0].name).toBe('Serj Takian');
        })

        beforeEach(async () => {
            await db('artists').truncate();
        })
    })

    describe('remove', () => {
        it('should remove artist', async () => {
            await Artists.remove(1);
            const artist = await db('artists');
            expect(artist).toHaveLength(0);
        })
        it('should return 200 OK status', () => {
            return request(server)
                .get('/artists')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })
    })
})
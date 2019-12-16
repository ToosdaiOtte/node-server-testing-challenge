
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('artists')
    .truncate()
    .then(function() {
      return knex('artists').insert([
        {name: 'Serj Takian'},
        {name: 'Selena Gomez'},
        {name: 'George Micheal'}
      ])
    })
};

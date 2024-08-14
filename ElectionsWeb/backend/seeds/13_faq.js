exports.seed = function(knex) {
    return knex('Faq').del()
      .then(function () {
        return knex('Faq').insert([
          { id: 1, question: 'What is the purpose of this platform?', answer: 'The platform aims to facilitate elections and provide information on candidates.' },
          { id: 2, question: 'How can I vote?', answer: 'You can vote by registering as a voter and selecting your preferred candidate.' }
        ]);
      });
  };
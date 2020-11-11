
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions_02').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions_02').insert([{
        shot_src: "https://st.kp.yandex.net/im/kadr/8/8/4/kinopoisk.ru-Home-Alone-884238.jpg",
        choiceA: "Home Alone (1990)",
        choiceB: "The Witches (1990)",
        choiceC: "The Addams Family (1991)",
        choiceD: "Emma. (2020)",
        correct: "Home Alone (1990)"
      }]);
    });
};





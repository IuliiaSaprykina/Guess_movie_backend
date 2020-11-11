
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
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMzc1MTMyMTU1M15BMl5BanBnXkFtZTgwNzE1MzQxNTM@._V1_FMjpg_UX480_.jpg",
          choiceA: "Home Alone (1990)",
          choiceB: "A Quiet Place (2018)",
          choiceC: "Brave New World (2020)",
          choiceD: "Emma. (2020)",
          correct: "A Quiet Place (2018)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BNWZhNjk4MjMtM2M2Zi00YmY2LTkwNWMtYTg2YjFjZWZjYjk4XkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Home Alone (1990)",
          choiceB: "A Quiet Place (2018)",
          choiceC: "Aquaman (2018)",
          choiceD: "Emma. (2020)",
          correct: "Aquaman (2018)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BNDkzOTk0Nzk1MV5BMl5BanBnXkFtZTgwNTM4MTQ0NzM@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Star Wars: Episode IX - The Rise of Skywalker (2019)",
          choiceB: "The Thing (1982)",
          choiceC: "Aquaman (2018)",
          choiceD: "Terminator: Dark Fate (2019)",
          correct: "Star Wars: Episode IX - The Rise of Skywalker (2019)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BZTA4NTMwYTYtZTQ0Mi00YmY1LTg0NGYtMTYwOTMwOWY5ODQxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Star Wars: Episode IX - The Rise of Skywalker (2019)",
          choiceB: "Terminator: Dark Fate (2019)",
          choiceC: "Inception (2010)",
          choiceD: "Blade Runner 2049 (2017)",
          correct: "Terminator: Dark Fate (2019)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMjM1MDQyNTkxM15BMl5BanBnXkFtZTgwODA1NzU1MzI@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Next (2020)",
          choiceB: "The Hunger Games (2012)",
          choiceC: "Blade Runner 2049 (2017)",
          choiceD: "Suicide Squad (2016)",
          correct: "Blade Runner 2049 (2017)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTA2MzU3MjAyMTZeQTJeQWpwZ15BbWU3MDIwODU5MTY@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Next (2020)",
          choiceB: "Black Box (II) (2020)",
          choiceC: "A Clockwork Orange (1971)",
          choiceD: "The Hunger Games (2012)",
          correct: "The Hunger Games (2012)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTY4OTYxMjQwNF5BMl5BanBnXkFtZTcwODM1MTkxNw@@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Doomsday (2008)",
          choiceB: "Black Box (II) (2020)",
          choiceC: "A Clockwork Orange (1971)",
          choiceD: "The Hunger Games (2012)",
          correct: "Doomsday (2008)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMWYxMmUwNGEtZDUwYi00YTQ4LWIwNzUtODI5NmY1YTdlY2FkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Glass (2019)",
          choiceB: "Watchmen (2019)",
          choiceC: "A Clockwork Orange (1971)",
          choiceD: "The Hunger Games (2012)",
          correct: "Watchmen (2019)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BNjc5OTk0ODA1OV5BMl5BanBnXkFtZTgwOTkxNDM5NTM@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Glass (2019)",
          choiceB: "Watchmen (2019)",
          choiceC: "The Prestige (2006)",
          choiceD: "Black Panther (2018)",
          correct: "Glass (2019)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTg3NTc5MzA0OV5BMl5BanBnXkFtZTgwMDI3MDM5NDM@._V1_FMjpg_UX1024_.jpg",
          choiceA: "The Fifth Element (1997)",
          choiceB: "Ready Player One (2018)",
          choiceC: "The Avengers (1998)",
          choiceD: "Black Panther (2018)",
          correct: "Black Panther (2018)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMjI5MTQ1NjcyMF5BMl5BanBnXkFtZTgwMjc2Mzg5MDE@._V1_FMjpg_UX1024_.jpg",
          choiceA: "The Fifth Element (1997)",
          choiceB: "Thor: Ragnarok (2017)",
          choiceC: "Avengers: Infinity War (2018)",
          choiceD: "Black Panther (2018)",
          correct: "The Fifth Element (1997)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTQ4MTk4ODAzN15BMl5BanBnXkFtZTgwNzY0NTY0NjE@._V1_FMjpg_UX1024_.jpg",
          choiceA: "The Fifth Element (1997)",
          choiceB: "Deadpool (2016)",
          choiceC: "Avengers: Infinity War (2018)",
          choiceD: "Donnie Darko (2001)",
          correct: "Deadpool (2016)"
      }]);
    });
};





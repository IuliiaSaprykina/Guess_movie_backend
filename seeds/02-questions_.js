
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions_02').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions_02').insert([{
        https://i.imgur.com/XAAL0uE.jpg        shot_src: "https://i.imgur.com/gz8DWS7.jpg",
        choiceA: "Home Alone (1990)",
        choiceB: "The Witches (1990)",
        choiceC: "The Addams Family (1991)",
        choiceD: "Emma. (2020)",
        correct: "Home Alone (1990)"
        },{
          shot_src: "https://i.imgur.com/YKwjg35.jpg",
          choiceA: "Home Alone (1990)",
          choiceB: "A Quiet Place (2018)",
          choiceC: "Brave New World (2020)",
          choiceD: "Emma. (2020)",
          correct: "A Quiet Place (2018)"
        },{
          shot_src: "https://i.imgur.com/BsKIE3P.jpg",
          choiceA: "Home Alone (1990)",
          choiceB: "A Quiet Place (2018)",
          choiceC: "Aquaman (2018)",
          choiceD: "Emma. (2020)",
          correct: "Aquaman (2018)"
        },{
          shot_src: "https://i.imgur.com/gpPET3T.jpg",
          choiceA: "Star Wars: Episode IX - The Rise of Skywalker (2019)",
          choiceB: "The Thing (1982)",
          choiceC: "Aquaman (2018)",
          choiceD: "Terminator: Dark Fate (2019)",
          correct: "Star Wars: Episode IX - The Rise of Skywalker (2019)"
        },{
          shot_src: "https://i.imgur.com/u1QOkys.jpg",
          choiceA: "Star Wars: Episode IX - The Rise of Skywalker (2019)",
          choiceB: "Terminator: Dark Fate (2019)",
          choiceC: "Inception (2010)",
          choiceD: "Blade Runner 2049 (2017)",
          correct: "Terminator: Dark Fate (2019)"
        },{
          shot_src: "https://i.imgur.com/5JqNSfW.jpg",
          choiceA: "Next (2020)",
          choiceB: "The Hunger Games (2012)",
          choiceC: "Blade Runner 2049 (2017)",
          choiceD: "Suicide Squad (2016)",
          correct: "Blade Runner 2049 (2017)"
        },{
          shot_src: "https://i.imgur.com/YCpOAZt.jpg",
          choiceA: "Next (2020)",
          choiceB: "Black Box (II) (2020)",
          choiceC: "A Clockwork Orange (1971)",
          choiceD: "The Hunger Games (2012)",
          correct: "The Hunger Games (2012)"
        },{
          shot_src: "https://i.imgur.com/G4fpKaZ.jpg",
          choiceA: "Doomsday (2008)",
          choiceB: "Black Box (II) (2020)",
          choiceC: "A Clockwork Orange (1971)",
          choiceD: "The Hunger Games (2012)",
          correct: "Doomsday (2008)"
        },{
          shot_src: "https://i.imgur.com/XAAL0uE.jpg",
          choiceA: "Glass (2019)",
          choiceB: "Watchmen (2019)",
          choiceC: "The Prestige (2006)",
          choiceD: "Black Panther (2018)",
          correct: "Glass (2019)"
        },{
          shot_src: "https://i.imgur.com/qmfKGgL.jpg",
          choiceA: "The Fifth Element (1997)",
          choiceB: "Ready Player One (2018)",
          choiceC: "The Avengers (1998)",
          choiceD: "Black Panther (2018)",
          correct: "Black Panther (2018)"
        },{
          shot_src: "https://i.imgur.com/nJMcNgd.jpg",
          choiceA: "The Fifth Element (1997)",
          choiceB: "Thor: Ragnarok (2017)",
          choiceC: "Avengers: Infinity War (2018)",
          choiceD: "Black Panther (2018)",
          correct: "The Fifth Element (1997)"
        },{
          shot_src: "https://i.imgur.com/IprkeIr.jpg",
          choiceA: "The Fifth Element (1997)",
          choiceB: "Deadpool (2016)",
          choiceC: "Avengers: Infinity War (2018)",
          choiceD: "Donnie Darko (2001)",
          correct: "Deadpool (2016)"
        },{
          shot_src: "https://i.imgur.com/V0hVAI4.jpg",
          choiceA: "Prospect (2018)",
          choiceB: "Thor: Ragnarok (2017)",
          choiceC: "Avengers: Infinity War (2018)",
          choiceD: "Donnie Darko (2001)",
          correct: "Donnie Darko (2001)"
        },{
          shot_src: "https://i.imgur.com/PC8nLqi.jpg",
          choiceA: "Alita: Battle Angel (2019)",
          choiceB: "Them! (1954)",
          choiceC: "Idiocracy (2006)",
          choiceD: "The Platform (2019)",
          correct: "Alita: Battle Angel (2019)"
        },{
          shot_src: "https://i.imgur.com/EF8rN1v.jpg",
          choiceA: "Alita: Battle Angel (2019)",
          choiceB: "Guardians of the Galaxy (2014)",
          choiceC: "The Meg (2018)",
          choiceD: "The Platform (2019)",
          correct: "Guardians of the Galaxy (2014)"
        },{
          shot_src: "https://i.imgur.com/HT9w2W9.jpg",
          choiceA: "Watchmen (2009)",
          choiceB: "Guardians of the Galaxy (2014)",
          choiceC: "The Meg (2018)",
          choiceD: "The Platform (2019)",
          correct: "The Meg (2018)"
        },{
          shot_src: "https://i.imgur.com/Qn915yG.jpg",
          choiceA: "Oblivion (I) (2013)",
          choiceB: "Dune (1984)",
          choiceC: "The Meg (2018)",
          choiceD: "Outland (1981)",
          correct: "Outland (1981)"
        },{
          shot_src: "https://i.imgur.com/Tuj2kLk.jpg",
          choiceA: "Avatar (2009)",
          choiceB: "Dune (1984)",
          choiceC: "The Predator (2018)",
          choiceD: "Color Out of Space (2019)",
          correct: "Avatar (2009)"
        },{
          shot_src: "https://i.imgur.com/AJ7bTgj.jpg",
          choiceA: "Guardians of the Galaxy (2014)",
          choiceB: "Idiocracy (2006)",
          choiceC: "Swamp Thing (2019)",
          choiceD: "Color Out of Space (2019)",
          correct: "Idiocracy (2006)"
        },{
          shot_src: "https://i.imgur.com/NymcPKb.jpg",
          choiceA: "Jurassic Park (1993)",
          choiceB: "Idiocracy (2006)",
          choiceC: "Oblivion (I) (2013)",
          choiceD: "Them! (1954)",
          correct: "Oblivion (I) (2013)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BNGE0OThjOTAtNmQ5Ny00NjUzLTk1OTItY2NjZWYwNDlkZmJlXkEyXkFqcGdeQXVyNjA5NDgxNTg@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Captain Marvel (2019)",
          choiceB: "Idiocracy (2006)",
          choiceC: "Solo: A Star Wars Story (2018)",
          choiceD: "The Platform (2019)",
          correct: "The Platform (2019)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMjc4MDQ0OTA5MF5BMl5BanBnXkFtZTgwOTU3MzgxMTI@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Dune (1984)",
          choiceB: "Swamp Thing (2019)",
          choiceC: "Rogue One: A Star Wars Story (2016)",
          choiceD: "The Platform (2019)",
          correct: "Dune (1984)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTc2MDU3MjM2N15BMl5BanBnXkFtZTcwODczMTY2Mw@@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Rogue One: A Star Wars Story (2016)",
          choiceB: "Star Wars: Episode VI - Return of the Jedi (1983)",
          choiceC: "Rogue One: A Star Wars Story (2016)",
          choiceD: "Wonder Woman (2017)",
          correct: "Star Wars: Episode VI - Return of the Jedi (1983)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTc5OTkxOTE0MF5BMl5BanBnXkFtZTgwMDAwOTg0NTM@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Rogue One: A Star Wars Story (2016)",
          choiceB: "Prometheus (I) (2012)",
          choiceC: "The Predator (2018)",
          choiceD: "Alien: Covenant (2017)",
          correct: "The Predator (2018)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTQwMDM4NDg1MF5BMl5BanBnXkFtZTcwMTg1MDYxNw@@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Swamp Thing (2019)",
          choiceB: "Prometheus (I) (2012)",
          choiceC: "The Predator (2018)",
          choiceD: "Oblivion (I) (2013)",
          correct: "Prometheus (I) (2012)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMjIxNjc1MDQwM15BMl5BanBnXkFtZTgwMDYzNzM0NzM@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Them! (1954)",
          choiceB: "Idiocracy (2006)",
          choiceC: "Captain Marvel (2019)",
          choiceD: "Oblivion (I) (2013)",
          correct: "Captain Marvel (2019)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMjM4MTM5Nzg3Ml5BMl5BanBnXkFtZTgwNzMyOTYzMjI@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Time Bandits (1981)",
          choiceB: "Idiocracy (2006)",
          choiceC: "Captain Marvel (2019)",
          choiceD: "Wonder Woman (2017)",
          correct: "Wonder Woman (2017)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTU5Njg1MDU0MV5BMl5BanBnXkFtZTgwNDU3MjA2MTI@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Alien: Covenant (2017)",
          choiceB: "Aliens (1986)",
          choiceC: "Gemini Man (2019)",
          choiceD: "Lucy (I) (2014)",
          correct: "Alien: Covenant (2017)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTg4NDU2NjQxM15BMl5BanBnXkFtZTgwMjAxMzMyMjE@._V1_FMjpg_UX1024_.jpg",
          choiceA: "28 Days Later... (2002)",
          choiceB: "Lucy (I) (2014)",
          choiceC: "Gemini Man (2019)",
          choiceD: "Ghostbusters (2016)",
          correct: "Lucy (I) (2014)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BNjA1ODA2MDI4NF5BMl5BanBnXkFtZTcwMjkxNTIzMw@@._V1_FMjpg_UX1024_.jpg",
          choiceA: "28 Days Later... (2002)",
          choiceB: "Lucy (I) (2014)",
          choiceC: "Iron Man (2008)",
          choiceD: "Her (2013)",
          correct: "Iron Man (2008)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BZDUxMDI2YWItOWEwYS00MjUzLTllZjctNzYyZTBkYmI0YTFhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1024_.jpg",
          choiceA: "The Avengers (2012)",
          choiceB: "Ghostbusters (2016)",
          choiceC: "Iron Man (2008)",
          choiceD: "Gemini Man (2019)",
          correct: "Gemini Man (2019)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMjA1MDIzNTA5NV5BMl5BanBnXkFtZTgwNzYyODk0NzE@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Ghostbusters (2016)",
          choiceB: "Aliens (1986)",
          choiceC: "2012 (I) (2009)",
          choiceD: "Gemini Man (2019)",
          correct: "Ghostbusters (2016)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTM2YTgyYWItZWE4Yi00Yjk0LTgyZmMtMGRmMjRjMTM3ZWYxXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Eternal Sunshine of the Spotless Mind (2004)",
          choiceB: "28 Days Later... (2002)",
          choiceC: "2012 (I) (2009)",
          choiceD: "Venom (2018)",
          correct: "28 Days Later... (2002)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMjQxMTMzNTE1OF5BMl5BanBnXkFtZTgwNDA5MDIyMjI@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Synchronic (2019)",
          choiceB: "28 Days Later... (2002)",
          choiceC: "Guardians of the Galaxy Vol. 2 (2017)",
          choiceD: "Venom (2018)",
          correct: "Guardians of the Galaxy Vol. 2 (2017)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTYxMTEwODk5OV5BMl5BanBnXkFtZTgwMDkwNjM3MDE@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Synchronic (2019)",
          choiceB: "World War Z (2013)",
          choiceC: "The Shape of Water (2017)",
          choiceD: "Her (2013)",
          correct: "Her (2013)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BNTAzMzYzOTE3Ml5BMl5BanBnXkFtZTgwNjM3NjU4NjM@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Venom (2018)",
          choiceB: "They Live (1988)",
          choiceC: "Captain America: The First Avenger (2011)",
          choiceD: "Her (2013)",
          correct: "Venom (2018)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMjIwYjM1MWYtNjBjZS00NTRiLWJmMDItNjA5ZGFhYzQ4ZGViXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_FMjpg_UX1024_.jpg",
          choiceA: "The Avengers (2012)",
          choiceB: "Synchronic (2019)",
          choiceC: "The Shape of Water (2017)",
          choiceD: "Transformers (2007)",
          correct: "The Shape of Water (2017)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BOTA0NzMyMTE1M15BMl5BanBnXkFtZTcwNTk2NTIyMw@@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Books of Blood (2020)",
          choiceB: "Synchronic (2019)",
          choiceC: "The Shape of Water (2017)",
          choiceD: "Transformers (2007)",
          correct: "Transformers (2007)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BNTBmMWE2NDItYTRkZC00ZmVjLThhZjUtODdiMzc1YjQ2MDcyXkEyXkFqcGdeQXVyMTcwNTE1Ng@@._V1_FMjpg_UX1024_.jpg",
          choiceA: "They Live (1988)",
          choiceB: "Captain America: The First Avenger (2011)",
          choiceC: "Terminator 2: Judgment Day (1991)",
          choiceD: "Star Wars: Episode VII - The Force Awakens (2015)",
          correct: "They Live (1988)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTg5NTM0NzY5MV5BMl5BanBnXkFtZTgwNDQ5MTE2NjM@._V1_FMjpg_UX1024_.jpg",
          choiceA: "They Live (1988)",
          choiceB: "Bird Box (2018)",
          choiceC: "X-Men: Apocalypse (2016)",
          choiceD: "Spontaneous (II) (2020)",
          correct: "Bird Box (2018)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTkzMzgwMDg5Nl5BMl5BanBnXkFtZTcwMzExMTI5Mg@@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Back to the Future Part II (1989)",
          choiceB: "Bird Box (2018)",
          choiceC: "2012 (I) (2009)",
          choiceD: "Snowpiercer (2013)",
          correct: "2012 (I) (2009)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTkzMzgwMDg5Nl5BMl5BanBnXkFtZTcwMzExMTI5Mg@@._V1_FMjpg_UX1024_.jpg",
          choiceA: "The Terminator (1984)",
          choiceB: "Ad Astra (2019)",
          choiceC: "Books of Blood (2020)",
          choiceD: "X-Men: Apocalypse (2016)",
          correct: "X-Men: Apocalypse (2016)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTQ3NTY2MDcxMF5BMl5BanBnXkFtZTgwMzEyNzU5NzE@._V1_FMjpg_UX1024_.jpg",
          choiceA: "The Terminator (1984)",
          choiceB: "Ad Astra (2019)",
          choiceC: "Books of Blood (2020)",
          choiceD: "X-Men: Apocalypse (2016)",
          correct: "X-Men: Apocalypse (2016)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTM5NzI4Mjk3N15BMl5BanBnXkFtZTcwNTQzNjgwMw@@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Hocus Pocus (1993)",
          choiceB: "Ad Astra (2019)",
          choiceC: "The Witches (1990)",
          choiceD: "X-Men: Apocalypse (2016)",
          correct: "Hocus Pocus (1993)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BYjJjMWYyZTktNTMzZi00NmYwLTk0ZmEtZDdiMTU0ZDA4ZDU0XkEyXkFqcGdeQXVyMjc1NTI5NQ@@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Beetlejuice (1988)",
          choiceB: "The Addams Family (1991)",
          choiceC: "The Witches (1990)",
          choiceD: "The Gentlemen (2019)",
          correct: "The Addams Family (1991)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMjQwNTgzMjkyMl5BMl5BanBnXkFtZTgwMjg2Mjk3NjM@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Beetlejuice (1988)",
          choiceB: "Parasite (2019)",
          choiceC: "Clue (1985)",
          choiceD: "Knives Out (2019)",
          correct: "Beetlejuice (1988)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMjM4NjM4MjU3MF5BMl5BanBnXkFtZTcwOTQwNzgwMw@@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Easy A (2010)",
          choiceB: "Ghostbusters (1984)",
          choiceC: "Cats (2019)",
          choiceD: "Casper (1995)",
          correct: "Casper (1995)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BMTg5Nzk3NjA5NF5BMl5BanBnXkFtZTYwNzQ5NDM3._V1_FMjpg_UX480_.jpg",
          choiceA: "Love Actually (2003)",
          choiceB: "Jojo Rabbit (2019)",
          choiceC: "Cats (2019)",
          choiceD: "The Lost Boys (1987)",
          correct: "Love Actually (2003)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BNDJkMjAyMGUtOTY4MS00ODliLWFlZGEtNDEwMzg1MTU3OGVlXkEyXkFqcGdeQXVyNjc4NjAwODg@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Love Actually (2003)",
          choiceB: "Jojo Rabbit (2019)",
          choiceC: "Dazed and Confused (1993)",
          choiceD: "The Big Lebowski (1998)",
          correct: "Jojo Rabbit (2019)"
        },{
          shot_src: "https://m.media-amazon.com/images/M/MV5BN2MxOGU2NTEtZTQ3Yy00ODZkLTlhZDgtNjUyNWJhODA3NmVjXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_FMjpg_UX1024_.jpg",
          choiceA: "Blended (2014)",
          choiceB: "Jojo Rabbit (2019)",
          choiceC: "13 Going on 30 (2004)",
          choiceD: "We're the Millers (2013)",
          correct: "13 Going on 30 (2004)"
      }]);
    });
};





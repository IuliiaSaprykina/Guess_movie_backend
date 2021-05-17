exports.seed = function(knex) {
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([{
        shot_src: "https://i.imgur.com/4Qjmw9C.jpg",
        choiceA: "The Godfather: Part II (1974)",
        choiceB: "The Shawshank Redemption (1994)",
        choiceC: "12 Angry Men ",
        choiceD: "Pulp Fiction (1994)",
        correct: "The Shawshank Redemption (1994)"
        }, {
        shot_src: "https://i.imgur.com/QkZr7sB.jpg",
        choiceA: "The Matrix (1999)",
        choiceB: "Life Is Beautiful (1997)",
        choiceC: "The Godfather (1972)",
        choiceD: "Star Wars: Episode IV - A New Hope (1977)",
        correct: "The Godfather (1972)"
        }, {
        shot_src: "https://i.imgur.com/NPagzTi.jpg",
        choiceA: "The Dark Knight (2008)",
        choiceB: "Forrest Gump (1994)",
        choiceC: "Goodfellas (1990)",
        choiceD: "Seven Samurai (1954)",
        correct: "The Dark Knight (2008)"
        }, {
        shot_src: "https://i.imgur.com/TiUe21Z.jpg",
        choiceA: "The Good, the Bad and the Ugly (1966)",
        choiceB: "12 Angry Men (1957)",
        choiceC: "It's a Wonderful Life (1946)",
        choiceD: "Seven Samurai (1954)",
        correct: "12 Angry Men (1957)"  
        }, {
        shot_src: "https://i.imgur.com/8ojOfK4.jpg",
        choiceA: "Pulp Fiction (1994)",
        choiceB: "12 Angry Men (1957)",
        choiceC: "Schindler's List (1993)",
        choiceD: "City of God (2002)",
        correct: "Schindler's List (1993)"
        }, {
        shot_src: "https://i.imgur.com/BrWUmNu.jpg",
        choiceA: "L.A. Confidential (1997)",
        choiceB: "Se7en (1995)",
        choiceC: "Life Is Beautiful (1997)",
        choiceD: "The Lord of the Rings: The Return of the King (2003)",
        correct: "The Lord of the Rings: The Return of the King (2003)" 
        }, {   
        shot_src: "https://i.imgur.com/WXq0LfB.jpg",
        choiceA: "Pulp Fiction (1994)",
        choiceB: "Fight Club (1999)",
        choiceC: "Spirited Away (2001)",
        choiceD: "Modern Times (1936)",
        correct: "Pulp Fiction (1994)"
        }, {
        shot_src: "https://i.imgur.com/ZkaR0B8.jpg",
        choiceA: "Witness for the Prosecution (1957)",
        choiceB: "The Good, the Bad and the Ugly (1966)",
        choiceC: "High and Low (1963)",
        choiceD: "Amadeus (1984)",
        correct: "The Good, the Bad and the Ugly (1966)"
        }, {
        shot_src: "https://i.imgur.com/kWL6xBL.jpg",
        choiceA: "Star Wars: Episode V - The Empire Strikes Back (1980)",
        choiceB: "One Flew Over the Cuckoo's Nest (1975)",
        choiceC: "The Lord of the Rings: The Fellowship of the Ring (2001)",
        choiceD: "The Godfather (1972)",
        correct: "The Lord of the Rings: The Fellowship of the Ring (2001)"
        }, {
        shot_src: "https://i.imgur.com/IpLseEt.jpg",
        choiceA: "Avengers: Infinity War (2018)",
        choiceB: "Once Upon a Time in America (1984)",
        choiceC: "Like Stars on Earth (2007)",
        choiceD: "Fight Club (1999)",
        correct: "Fight Club (1999)"
        }, {
        shot_src: "https://i.imgur.com/f6Cbj8S.jpg",
        choiceA: "Forrest Gump (1994)",
        choiceB: "Pulp Fiction (1994)",
        choiceC: "Interstellar (2014)",
        choiceD: "Fight Club (1999)",
        correct: "Forrest Gump (1994)"
        }, {
        shot_src: "https://i.imgur.com/8mK8Sxf.jpg",
        choiceA: "Star Wars: Episode V - The Empire Strikes Back (1980)",
        choiceB: "Inception (2010)",
        choiceC: "American History X (1998)",
        choiceD: "Casablanca (1942)",
        correct: "Inception (2010)"
        }, {
        shot_src: "https://i.imgur.com/wcAc7Sc.png",
        choiceA: "The Intouchables (2011)",
        choiceB: "Sunset Blvd. (1950)",
        choiceC: "Star Wars: Episode V - The Empire Strikes Back (1980)",
        choiceD: "Coco (2017)",
        correct: "Star Wars: Episode V - The Empire Strikes Back (1980)"
        }, {
        shot_src: "https://i.imgur.com/oB0il7S.png",
        choiceA: "Spirited Away (2001)",
        choiceB: "Sunset Blvd. (1950)",
        choiceC: "Inception (2010)",
        choiceD: "Saving Private Ryan (1998)",
        correct: "Saving Private Ryan (1998)"
        }, {
        shot_src: "https://i.imgur.com/yYVKfZh.jpg",
        choiceA: "Parasite (2019)",
        choiceB: "Life Is Beautiful (1997)",
        choiceC: "The Great Dictator (1940)",
        choiceD: "Oldboy (2003)",
        correct: "Parasite (2019)"
        }, {
        shot_src: "https://i.imgur.com/os5lhmi.jpg",
        choiceA: "WALL·E (2008)",
        choiceB: "Spirited Away (2001)",
        choiceC: "Princess Mononoke (1997)",
        choiceD: "Your Name. (2016)",
        correct: "Spirited Away (2001)"
        }, {
        shot_src: "https://i.imgur.com/jlZphIH.jpg",
        choiceA: "Interstellar (2014)",
        choiceB: "Léon: The Professional (1994)",
        choiceC: "The Green Mile (1999)",
        choiceD: "Full Metal Jacket (1987)",
        correct: "The Green Mile (1999)"
        }, {
        shot_src: "https://i.imgur.com/FHhdUSJ.jpg",
        choiceA: "Pulp Fiction (1994)",
        choiceB: "Whiplash (2014)",
        choiceC: "Alien (1979)",
        choiceD: "Interstellar (2014)",
        correct: "Interstellar (2014)"
        }, {
        shot_src: "https://i.imgur.com/bpxaITX.jpg",
        choiceA: "Léon: The Professional (1994)",
        choiceB: "The Usual Suspects (1995)",
        choiceC: "Alien (1979)",
        choiceD: "The Lion King (1994)",
        correct: "Léon: The Professional (1994)"
        }, {
        shot_src: "https://i.imgur.com/2XbGRAy.jpg",
        choiceA: "Léon: The Professional (1994)",
        choiceB: "The Usual Suspects (1995)",
        choiceC: "Pulp Fiction (1994)",
        choiceD: "The Godfather: Part II (1974)",
        correct: "The Usual Suspects (1995)"
        }, {
        shot_src: "https://i.imgur.com/2UPVHrB.jpg",
        choiceA: "Once Upon a Time in America (1984)",
        choiceB: "Amadeus (1984)",
        choiceC: "Harakiri (1962)",
        choiceD: "Vertigo (1958)",
        correct: "Harakiri (1962)"
        }, {
        shot_src: "https://i.imgur.com/w24nAP8.jpg",
        choiceA: "Cinema Paradiso (1988)",
        choiceB: "Spider-Man: Into the Spider-Verse (2018)",
        choiceC: "Toy Story (1995)",
        choiceD: "The Lion King (1994)",
        correct: "The Lion King (1994)"
        }, {
        shot_src: "https://i.imgur.com/nxhh5Xm.jpg",
        choiceA: "The Pianist (2002)",
        choiceB: "Back to the Future (1985)",
        choiceC: "The Dark Knight (2008)",
        choiceD: "Witness for the Prosecution (1957)",
        correct: "The Pianist (2002)"
        }, {
        shot_src: "https://i.imgur.com/bEWfve3.jpg",
        choiceA: "Harakiri (1962)",
        choiceB: "American History X (1998)",
        choiceC: "Back to the Future (1985)",
        choiceD: "Oldboy (2003)",
        correct: "American History X (1998)"
        }, {
        shot_src: "https://i.imgur.com/2aSUcn4.jpg",
        choiceA: "Terminator 2: Judgment Day (1991)",
        choiceB: "The Lives of Others (2006)",
        choiceC: "Back to the Future (1985)",
        choiceD: "Das Boot (1981)",
        correct: "Back to the Future (1985)"
        }, {
        shot_src: "https://i.imgur.com/qwFgjWR.jpg",
        choiceA: "One Flew Over the Cuckoo's Nest (1975)",
        choiceB: "The Matrix (1999)",
        choiceC: "Se7en (1995)",
        choiceD: "Terminator 2: Judgment Day (1991)",
        correct: "Terminator 2: Judgment Day (1991)"
        }, {
        shot_src: "https://i.imgur.com/UDIVwhf.jpg",
        choiceA: "Goodfellas (1990)",
        choiceB: "The Godfather (1972)",
        choiceC: "The Shining (1980)",
        choiceD: "American Beauty (1999)",
        correct: "Goodfellas (1990)"
        }, {
        shot_src: "https://i.imgur.com/LOP9VEa.jpg",
        choiceA: "The Silence of the Lambs (1991)",
        choiceB: "One Flew Over the Cuckoo's Nest (1975)",
        choiceC: "The Lord of the Rings: The Two Towers (2002)",
        choiceD: "American Beauty (1999)",
        correct: "One Flew Over the Cuckoo's Nest (1975)"
        }, {
        shot_src: "https://i.imgur.com/zygRoVc.jpg",
        choiceA: "Harakiri (1962)",
        choiceB: "City Lights (1931)",
        choiceC: "Seven Samurai (1954)",
        choiceD: "High and Low (1963)",
        correct: "Seven Samurai (1954)"
        }, {
        shot_src: "https://i.imgur.com/VbyLZU3.jpg",
        choiceA: "Life Is Beautiful (1997)",
        choiceB: "Léon: The Professional (1994)",
        choiceC: "American History X (1998)",
        choiceD: "Se7en (1995)",
        correct: "Se7en (1995)"
        }, {
        shot_src: "https://i.imgur.com/FlPcjtU.jpg",
        choiceA: "Life Is Beautiful (1997)",
        choiceB: "The Silence of the Lambs (1991)",
        choiceC: "Good Will Hunting (1997)",
        choiceD: "For a Few Dollars More (1965)",
        correct: "Life Is Beautiful (1997)"
        }, {
        shot_src: "https://i.imgur.com/0GfVGyk.jpg",
        choiceA: "Schindler's List (1993)",
        choiceB: "City of God (2002)",
        choiceC: "The Departed (2006)",
        choiceD: "The Green Mile (1999)",
        correct: "City of God (2002)"
        }, {
        shot_src: "https://i.imgur.com/dZiGB2Y.jpg",
        choiceA: "12 Angry Men (1957)",
        choiceB: "Se7en (1995)",
        choiceC: "The Silence of the Lambs (1991)",
        choiceD: "Parasite (2019)",
        correct: "The Silence of the Lambs (1991)"
        }, {
        shot_src: "https://i.imgur.com/ywyKTW3.jpg",
        choiceA: "The Shining (1980)",
        choiceB: "Modern Times (1936)",
        choiceC: "Django Unchained (2012)",
        choiceD: "Raiders of the Lost Ark (1981)",
        correct: "Django Unchained (2012)"
        }, {
        shot_src: "https://i.imgur.com/AYr6fLT.jpg",
        choiceA: "Saving Private Ryan (1998)",
        choiceB: "Modern Times (1936)",
        choiceC: "Terminator 2: Judgment Day (1991)",
        choiceD: "It's a Wonderful Life (1946)",
        correct: "It's a Wonderful Life (1946)"
        }, {
        shot_src: "https://i.imgur.com/sRWpfmR.jpg",
        choiceA: "Modern Times (1936)",
        choiceB: "Avengers: Infinity War (2018)",
        choiceC: "Django Unchained (2012)",
        choiceD: "The Great Dictator (1940)",
        correct: "Modern Times (1936)"
        }, {
        shot_src: "https://i.imgur.com/BAiJ1YA.jpg",
        choiceA: "Harakiri (1962)",
        choiceB: "Psycho (1960)",
        choiceC: "Grave of the Fireflies (1988)",
        choiceD: "Memento (2000)",
        correct: "Psycho (1960)"
        }, {
        shot_src: "https://i.imgur.com/RWXdkZ9.jpg",
        choiceA: "Fight Club (1999)",
        choiceB: "The Usual Suspects (1995)",
        choiceC: "Gladiator (2000)",
        choiceD: "Indiana Jones and the Raiders of the Lost Ark (1981)",
        correct: "Gladiator (2000)"
        }, {
        shot_src: "https://i.imgur.com/4E84AaK.jpg",
        choiceA: "Whiplash (2014)",
        choiceB: "Apocalypse Now (1979)",
        choiceC: "Avengers: Infinity War (2018)",
        choiceD: "City Lights (1931)",
        correct: "City Lights (1931)"
        }, {
        shot_src: "https://i.imgur.com/8NpCeHI.jpg",
        choiceA: "The Departed (2006)",
        choiceB: "Snatch (2000)",
        choiceC: "Bicycle Thieves (1948)",
        choiceD: "Incendies (2010)",
        correct: "The Departed (2006)"
        }, {
        shot_src: "https://i.imgur.com/mJXFfTs.jpg",
        choiceA: "The Prestige (2006)",
        choiceB: "The Intouchables (2011)",
        choiceC: "The Lives of Others (2006)",
        choiceD: "Oldboy (2003)",
        correct: "The Intouchables (2011)"
        }, {
        shot_src: "https://i.imgur.com/uTqH6UX.jpg",
        choiceA: "The Hunt (2012)",
        choiceB: "A Separation (2011)",
        choiceC: "Whiplash (2014)",
        choiceD: "Come and See (1985)",
        correct: "Whiplash (2014)"
        }, {
        shot_src: "https://i.imgur.com/Mx6qGYg.jpg",
        choiceA: "Casablanca (1942)",
        choiceB: "The Usual Suspects (1995)",
        choiceC: "Alien (1979)",
        choiceD: "The Prestige (2006)",
        correct: "The Prestige (2006)"
        }, {
        shot_src: "https://i.imgur.com/Bwu1BFS.jpg",
        choiceA: "Apocalypse Now (1979)",
        choiceB: "Paths of Glory (1957)",
        choiceC: "Rear Window (1954)",
        choiceD: "Witness for the Prosecution (1957)",
        correct: "Apocalypse Now (1979)"
        }, {
        shot_src: "https://i.imgur.com/CBsySQV.jpg",
        choiceA: "Once Upon a Time in the West (1968)",
        choiceB: "Memento (2000)",
        choiceC: "Joker (2019)",
        choiceD: "Witness for the Prosecution (1957)",
        correct: "Once Upon a Time in the West (1968)"
        }, {
        shot_src: "https://i.imgur.com/tedFR4V.jpg",
        choiceA: "The Prestige (2006)",
        choiceB: "Grave of the Fireflies (1988)",
        choiceC: "Paths of Glory (1957)",
        choiceD: "Oldboy (2003)",
        correct: "Grave of the Fireflies (1988)"
        }, {
        shot_src: "https://i.imgur.com/4WM0E4H.jpg",
        choiceA: "Gladiator (2000)",
        choiceB: "Spirited Away (2001)",
        choiceC: "Casablanca (1942)",
        choiceD: "The Good, the Bad and the Ugly (1966)",
        correct: "Casablanca (1942)"
        }, {
        shot_src: "https://i.imgur.com/4b5kExL.jpg",
        choiceA: "Se7en (1995)",
        choiceB: "WALL·E (2008)",
        choiceC: "The Dark Knight Rises (2012)",
        choiceD: "Rear Window (1954)",
        correct: "Rear Window (1954)"
        }, {
        shot_src: "https://i.imgur.com/LY6kLwx.jpg",
        choiceA: "Cinema Paradiso (1988)",
        choiceB: "Back to the Future (1985)",
        choiceC: "The Departed (2006)",
        choiceD: "The Lives of Others (2006)",
        correct: "Cinema Paradiso (1988)"
        }, {
        shot_src: "https://i.imgur.com/kBFWSAf.jpg",
        choiceA: "Joker (2019)",
        choiceB: "Alien (1979)",
        choiceC: "Psycho (1960)",
        choiceD: "The Lion King (1994)",
        correct: "Alien (1979)" 
        }, {
        shot_src: "https://i.imgur.com/Ob7oVe8.jpg",
        choiceA: "Joker (2019)",
        choiceB: "Alien (1979)",
        choiceC: "Memento (2000)",
        choiceD: "Oldboy (2003)",
        correct: "Memento (2000)"
        }, {
        shot_src: "https://i.imgur.com/4fuHs9p.jpg",
        choiceA: "Paths of Glory (1957)",
        choiceB: "Reservoir Dogs (1992)",
        choiceC: "Requiem for a Dream (2000)",
        choiceD: "The Lives of Others (2006)",
        correct: "The Lives of Others (2006)"
        }, {
        shot_src: "https://i.imgur.com/Q2IX5zD.jpg",
        choiceA: "Joker (2019)",
        choiceB: "Cinema Paradiso (1988)",
        choiceC: "Like Stars on Earth (2007)",
        choiceD: "The Lives of Others (2006)",
        correct: "Joker (2019)"
        }, {
        shot_src: "https://i.imgur.com/MKiooq3.jpg",
        choiceA: "Apocalypse Now (1979)",
        choiceB: "Paths of Glory (1957)",
        choiceC: "The Hunt (2012)",
        choiceD: "Amélie (2001)",
        correct: "Paths of Glory (1957)"
        }, {
        shot_src: "https://i.imgur.com/DVJef3r.jpg",
        choiceA: "Das Boot (1981)",
        choiceB: "Toy Story (1995)",
        choiceC: "The Shining (1980)",
        choiceD: "High and Low (1963)",
        correct: "The Shining (1980)"
        }, {
        shot_src: "https://i.imgur.com/oOodHnw.jpg",
        choiceA: "Green Book (2018)",
        choiceB: "Toy Story (1995)",
        choiceC: "Monty Python and the Holy Grail (1975)",
        choiceD: "WALL·E (2008)",
        correct: "WALL·E (2008)"
        }, {
        shot_src: "https://i.imgur.com/W7CaIKn.jpg",
        choiceA: "Princess Mononoke (1997)",
        choiceB: "Casablanca (1942)",
        choiceC: "Oldboy (2003)",
        choiceD: "WALL·E (2008)",
        correct: "Princess Mononoke (1997)"
        }, {
        shot_src: "https://i.imgur.com/ixFrSty.jpg",
        choiceA: "Princess Mononoke (1997)",
        choiceB: "Spider-Man: Into the Spider-Verse (2018)",
        choiceC: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964)",
        choiceD: "Avengers: Infinity War (2018)	",
        correct: "Spider-Man: Into the Spider-Verse (2018)"
        }, {
        shot_src: "https://i.imgur.com/vdNQeej.jpg",
        choiceA: "Amadeus (1984)",
        choiceB: "American Beauty (1999)",
        choiceC: "Avengers: Infinity War (2018)",
        choiceD: "Your Name. (2016)",
        correct: "Avengers: Infinity War (2018)"
        }, {
        shot_src: "https://i.imgur.com/l2zyQRS.jpg",
        choiceA: "Avengers: Endgame (2019)",
        choiceB: "American Beauty (1999)",
        choiceC: "The Dark Knight Rises (2012)",
        choiceD: "Oldboy (2003)",
        correct: "Oldboy (2003)"
        }, {
        shot_src: "https://i.imgur.com/RWP507p.jpg",
        choiceA: "The Dark Knight Rises (2012)",
        choiceB: "The Dark Knight (2008)",
        choiceC: "Saving Private Ryan (1998)",
        choiceD: "Oldboy (2003)",
        correct: "The Dark Knight Rises (2012)"
        }, {
        shot_src: "https://i.imgur.com/E7CIIat.jpg",
        choiceA: "Avengers: Endgame (2019)",
        choiceB: "Once Upon a Time in America (1984)",
        choiceC: "Saving Private Ryan (1998)",
        choiceD: "Aliens (1986)",
        correct: "Once Upon a Time in America (1984)"
        }, {
        shot_src: "https://i.imgur.com/IAVyT11.jpg",
        choiceA: "Your Name. (2016)",
        choiceB: "Once Upon a Time in America (1984)",
        choiceC: "Saving Private Ryan (1998)",
        choiceD: "American Beauty (1999)",
        correct: "Your Name. (2016)"
        }, {
        shot_src: "https://i.imgur.com/ibi0yg3.jpg",
        choiceA: "Your Name. (2016)",
        choiceB: "Coco (2017)",
        choiceC: "Braveheart (1995)",
        choiceD: "American Beauty (1999)",
        correct: "Coco (2017)"
        }, {
        shot_src: "https://i.imgur.com/UvlFqz6.jpg",
        choiceA: "Witness for the Prosecution (1957)",
        choiceB: "Coco (2017)",
        choiceC: "3 Idiots (2009)",
        choiceD: "American Beauty (1999)",
        correct: "American Beauty (1999)"
        }, {
        shot_src: "https://i.imgur.com/yAC1aNR.jpg",
        choiceA: "Braveheart (1995)",
        choiceB: "Bicycle Thieves (1948)",
        choiceC: "For a Few Dollars More (1965)",
        choiceD: "Batman Begins (2005)",
        correct: "Braveheart (1995)"
        }, {
        shot_src: "https://i.imgur.com/2b0W34m.jpg",
        choiceA: "The Dark Knight Rises (2012)",
        choiceB: "Das Boot (1981)",
        choiceC: "3 Idiots (2009)",
        choiceD: "Your Name. (2016)",
        correct: "3 Idiots (2009)"
        }, {
        shot_src: "https://i.imgur.com/zbp6XJ4.jpg",
        choiceA: "Toy Story (1995)",
        choiceB: "High and Low (1963)",
        choiceC: "Inglourious Basterds (2009)",
        choiceD: "Your Name. (2016)",
        correct: "Toy Story (1995)"
        }, {
        shot_src: "https://i.imgur.com/XUmQAfS.jpg",
        choiceA: "Star Wars: Episode VI - Return of the Jedi (1983)",
        choiceB: "High and Low (1963)",
        choiceC: "Good Will Hunting (1997)",
        choiceD: "Amadeus (1984)",
        correct: "High and Low (1963)"
        }, {
        shot_src: "https://i.imgur.com/JNgjkiI.jpg",
        choiceA: "Star Wars: Episode VI - Return of the Jedi (1983)",
        choiceB: "High and Low (1963)",
        choiceC: "Like Stars on Earth (2007)",
        choiceD: "Once Upon a Time in America (1984)",
        correct: "Like Stars on Earth (2007)"
        }, {
        shot_src: "https://i.imgur.com/SESrcOs.jpg",
        choiceA: "Full Metal Jacket (1987)",
        choiceB: "M (1931)",
        choiceC: "Capernaum (2018)",
        choiceD: "Amadeus (1984)",
        correct: "Amadeus (1984)"
        }, {
        shot_src: "https://i.imgur.com/IsVBvnw.jpg",
        choiceA: "Star Wars: Episode VI - Return of the Jedi (1983)",
        choiceB: "M (1931)",
        choiceC: "Reservoir Dogs (1992)	",
        choiceD: "Amadeus (1984)",
        correct: "Star Wars: Episode VI - Return of the Jedi (1983)"
        }, {
        shot_src: "https://i.imgur.com/iIQCzDA.jpg",
        choiceA: "Star Wars: Episode VI - Return of the Jedi (1983)",
        choiceB: "Reservoir Dogs (1992)",
        choiceC: "Toy Story (1995)",
        choiceD: "1917 (2019)",
        correct: "Reservoir Dogs (1992)"
        }, {
        shot_src: "https://i.imgur.com/mfZVr56.jpg",
        choiceA: "Good Will Hunting (1997)",
        choiceB: "Like Stars on Earth (2007)",
        choiceC: "Inglourious Basterds (2009)",
        choiceD: "1917 (2019)",
        correct: "Inglourious Basterds (2009)"
        }, {
        shot_src: "https://i.imgur.com/1cAxkaR.jpg",
        choiceA: "Requiem for a Dream (2000)",
        choiceB: "Like Stars on Earth (2007)",
        choiceC: "Dangal (2016)",
        choiceD: "Good Will Hunting (1997)",
        correct: "Good Will Hunting (1997)"
        }, {
        shot_src: "https://i.imgur.com/sxjAoBe.jpg",
        choiceA: "1917 (2019)",
        choiceB: "Like Stars on Earth (2007)",
        choiceC: "Dangal (2016)",
        choiceD: "Good Will Hunting (1997)",
        correct: "1917 (2019)"
        }, {
        shot_src: "https://i.imgur.com/KgDFuZe.jpg",
        choiceA: "1917 (2019)",
        choiceB: "2001: A Space Odyssey (1968)",
        choiceC: "Dangal (2016)",
        choiceD: "Braveheart (1995)",
        correct: "2001: A Space Odyssey (1968)"
        }, {
        shot_src: "https://i.imgur.com/jh4VN66.jpg",
        choiceA: "1917 (2019)",
        choiceB: "2001: A Space Odyssey (1968)",
        choiceC: "Capernaum (2018)",
        choiceD: "Inglourious Basterds (2009)",
        correct: "Capernaum (2018)"
        }, {
        shot_src: "https://i.imgur.com/vsTXYuc.jpg",
        choiceA: "Das Boot (1981)",
        choiceB: "To Kill a Mockingbird (1962)",
        choiceC: "Oldboy (2003)",
        choiceD: "Vertigo (1958)",
        correct: "Vertigo (1958)"
        }, {
        shot_src: "https://i.imgur.com/kGXfAEr.jpg",
        choiceA: "Requiem for a Dream (2000)",
        choiceB: "Avengers: Endgame (2019)",
        choiceC: "L.A. Confidential (1997)",
        choiceD: "A Separation (2011)",
        correct: "Requiem for a Dream (2000)"
        }, {
        shot_src: "https://i.imgur.com/HqCEaO8.jpg",
        choiceA: "Spider-Man: Into the Spider-Verse (2018)",
        choiceB: "M (1931)",
        choiceC: "The Dark Knight Rises (2012)",
        choiceD: "Django Unchained (2012)",
        correct: "M (1931)"
        }, {
        shot_src: "https://i.imgur.com/oqyuCL0.jpg",
        choiceA: "2001: A Space Odyssey (1968)",
        choiceB: "Children of Heaven (1997)",
        choiceC: "Dangal (2016)",
        choiceD: "The Gold Rush (1925)",
        correct: "Dangal (2016)"
        }, {
        shot_src: "https://i.imgur.com/gKO8i78.jpg",
        choiceA: "Raiders of the Lost Ark (1981)",
        choiceB: "Paths of Glory (1957)",
        choiceC: "Dangal (2016)",
        choiceD: "Eternal Sunshine of the Spotless Mind (2004)",
        correct: "Eternal Sunshine of the Spotless Mind (2004)"
        }, {
        shot_src: "https://i.imgur.com/D73nkI4.jpg",
        choiceA: "The Hunt (2012)",
        choiceB: "Batman Begins (2005)",
        choiceC: "Ran (1985)",
        choiceD: "Howl's Moving Castle (2004)",
        correct: "The Hunt (2012)"
        }, {
        shot_src: "https://i.imgur.com/hJdVfpH.jpg",
        choiceA: "WALL·E (2008)",
        choiceB: "Citizen Kane (1941)",
        choiceC: "The Shining (1980)",
        choiceD: "Howl's Moving Castle (2004)",
        correct: "Citizen Kane (1941)"
        }, {
        shot_src: "https://i.imgur.com/31DlgjH.jpg",
        choiceA: "Avengers: Endgame (2019)",
        choiceB: "Aliens (1986)",
        choiceC: "Full Metal Jacket (1987)",
        choiceD: "Braveheart (1995)",
        correct: "Full Metal Jacket (1987)"
        }, {
        shot_src: "https://i.imgur.com/bOtH31g.jpg",
        choiceA: "Monty Python and the Holy Grail (1975)",
        choiceB: "Rashomon (1950)",
        choiceC: "Bicycle Thieves (1948)",
        choiceD: "Green Book (2018)",
        correct: "Bicycle Thieves (1948)"
        }, {
        shot_src: "https://i.imgur.com/c3V8z05.jpg",
        choiceA: "A Separation (2011)",
        choiceB: "Toy Story 3 (2010)",
        choiceC: "The Apartment (1960)",
        choiceD: "North by Northwest (1959)",
        correct: "North by Northwest (1959)"
        }, {
        shot_src: "https://i.imgur.com/Pm4MGSP.jpg",
        choiceA: "A Clockwork Orange (1971)",
        choiceB: "Full Metal Jacket (1987)",
        choiceC: "Requiem for a Dream (2000)",
        choiceD: "Ikiru (1952)",
        correct: "A Clockwork Orange (1971)"
        }, {
        shot_src: "https://i.imgur.com/WfZ0cts.jpg",
        choiceA: "A Clockwork Orange (1971)",
        choiceB: "The Kid (1921)",
        choiceC: "1917 (2019)",
        choiceD: "Incendies (2010)",
        correct: "The Kid (1921)"
        }, {
        shot_src: "https://i.imgur.com/Mf7sQzm.jpg",
        choiceA: "Up (2009)",
        choiceB: "Downfall (2004)",
        choiceC: "Snatch (2000)",
        choiceD: "A Beautiful Mind (2001)",
        correct: "Snatch (2000)"
        }, {
        shot_src: "https://i.imgur.com/T5Zs37A.jpg",
        choiceA: "Amélie (2001)",
        choiceB: "North by Northwest (1959)",
        choiceC: "Snatch (2000)",
        choiceD: "Singin' in the Rain (1952)",
        correct: "Singin' in the Rain (1952)"
        }, {
        shot_src: "https://i.imgur.com/xDMgE6X.jpg",
        choiceA: "Scarface (1983)",
        choiceB: "To Kill a Mockingbird (1962)",
        choiceC: "Come and See (1985)",
        choiceD: "The Great Escape (1963)",
        correct: "Scarface (1983)"
        }, {
        shot_src: "https://i.imgur.com/qz2JGZ0.jpg",
        choiceA: "Toy Story 3 (2010)",
        choiceB: "Taxi Driver (1976)",
        choiceC: "Reservoir Dogs (1992)",
        choiceD: "The Great Escape (1963)",
        correct: "Taxi Driver (1976)"
        }, {
        shot_src: "https://i.imgur.com/dCKbNO8.jpg",
        choiceA: "The Elephant Man (1980)",
        choiceB: "No Country for Old Men (2007)",
        choiceC: "Amélie (2001)",
        choiceD: "Warrior (2011)",
        correct: "Amélie (2001)"
        }, {
        shot_src: "https://i.imgur.com/D5EoKX9.jpg",
        choiceA: "Indiana Jones and the Last Crusade (1989)",
        choiceB: "No Country for Old Men (2007)",
        choiceC: "For a Few Dollars More (1965)",
        choiceD: "Lawrence of Arabia (1962)",
        correct: "Lawrence of Arabia (1962)"
        }, {
        shot_src: "https://i.imgur.com/tiUx0yk.jpg",
        choiceA: "Toy Story 3 (2010)",
        choiceB: "L.A. Confidential (1997)",
        choiceC: "Die Hard (1988)",
        choiceD: "Rashomon (1950)",
        correct: "Toy Story 3 (2010)"
        }, {
        shot_src: "https://i.imgur.com/P9kY8pu.jpg",
        choiceA: "Gone Girl (2014)",
        choiceB: "The Sting (1973)",
        choiceC: "Persona (1966)",
        choiceD: "How to Train Your Dragon (2010)",
        correct: "The Sting (1973)"
        }, {
        shot_src: "https://i.imgur.com/Movv4v8.jpg",
        choiceA: "Pan's Labyrinth (2006)",
        choiceB: "All About Eve (1950)",
        choiceC: "Ikiru (1952)",
        choiceD: "My Neighbor Totoro (1988)",
        correct: "Ikiru (1952)"
        }, {
        shot_src: "https://i.imgur.com/IHeX6mr.jpg",
        choiceA: "Sunset Blvd. (1950)",
        choiceB: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964)",
        choiceC: "Witness for the Prosecution (1957)",
        choiceD: "Metropolis (1927)",
        correct: "Metropolis (1927)"
        }, {
        shot_src: "https://i.imgur.com/fB3382t.jpg",
        choiceA: "A Separation (2011)",
        choiceB: "The Secret in Their Eyes (2009)",
        choiceC: "There Will Be Blood (2007)",
        choiceD: "Metropolis (1927)",
        correct: "A Separation (2011)"
        }, {
        shot_src: "https://i.imgur.com/aRyKfVp.jpg",
        choiceA: "The Thing (1982)",
        choiceB: "For a Few Dollars More (1965)",
        choiceC: "Jurassic Park (1993)",
        choiceD: "Metropolis (1927)",
        correct: "For a Few Dollars More (1965)"
        }, {
        shot_src: "https://i.imgur.com/PFWsBBh.jpg",
        choiceA: "Kill Bill: Vol. 1 (2003)",
        choiceB: "For a Few Dollars More (1965)",
        choiceC: "Indiana Jones and the Last Crusade (1989)",
        choiceD: "Blade Runner (1982)",
        correct: "Indiana Jones and the Last Crusade (1989)"
        }, {
        shot_src: "https://i.imgur.com/najdTuQ.jpg",
        choiceA: "Kill Bill: Vol. 1 (2003)",
        choiceB: "Monty Python and the Holy Grail (1975)",
        choiceC: "Toy Story 3 (2010)",
        choiceD: "Up (2009)",
        correct: "Up (2009)"
        }, {
        shot_src: "https://i.imgur.com/KhX2Qxo.jpg",
        choiceA: "L.A. Confidential (1997)",
        choiceB: "The Third Man (1949)",
        choiceC: "The Deer Hunter (1978)",
        choiceD: "Memories of Murder (2003)",
        correct: "L.A. Confidential (1997)"
        }, {
        shot_src: "https://i.imgur.com/Vn4Wj0Z.jpg",
        choiceA: "Double Indemnity (1944)",
        choiceB: "Heat (1995)",
        choiceC: "The Deer Hunter (1978)",
        choiceD: "Die Hard (1988)",
        correct: "Heat (1995)"
        }, {
        shot_src: "https://i.imgur.com/crCc0wX.jpg",
        choiceA: "My Neighbor Totoro (1988)",
        choiceB: "Heat (1995)",
        choiceC: "Come and See (1985)",
        choiceD: "The Wolf of Wall Street (2013)",
        correct: "Come and See (1985)"
        }, {
        shot_src: "https://i.imgur.com/6Mtdr0W.jpg",
        choiceA: "Some Like It Hot (1959)",
        choiceB: "All About Eve (1950)",
        choiceC: "The Great Escape (1963)",
        choiceD: "Green Book (2018)",
        correct: "Green Book (2018)"
        }, {
        shot_src: "https://i.imgur.com/9cWKPig.jpg",
        choiceA: "Downfall (2004)",
        choiceB: "Batman Begins (2005)",
        choiceC: "Howl's Moving Castle (2004)",
        choiceD: "Green Book (2018)",
        correct: "Downfall (2004)"
        }, {
        shot_src: "https://i.imgur.com/E3E0Evc.jpg",
        choiceA: "Downfall (2004)",
        choiceB: "Children of Heaven (1997)",
        choiceC: "Howl's Moving Castle (2004)",
        choiceD: "Unforgiven (1992)",
        correct: "Children of Heaven (1997)"
        }, {
        shot_src: "https://i.imgur.com/zpO0srV.jpg",
        choiceA: "A Beautiful Mind (2001)",
        choiceB: "Casino (1995)",
        choiceC: "Howl's Moving Castle (2004)",
        choiceD: "Pan's Labyrinth (2006)",
        correct: "Howl's Moving Castle (2004)"
        }, {
        shot_src: "https://i.imgur.com/q412zvq.jpg",
        choiceA: "A Beautiful Mind (2001)",
        choiceB: "Casino (1995)",
        choiceC: "Dial M for Murder (1954)",
        choiceD: "The Gold Rush (1925)",
        correct: "A Beautiful Mind (2001)"
        }, {
        shot_src: "https://i.imgur.com/VV5C8OQ.jpg",
        choiceA: "A Beautiful Mind (2001)",
        choiceB: "Casino (1995)",
        choiceC: "Heat (1995)",
        choiceD: "The Sting (1973)",
        correct: "Casino (1995)"
        }, {
        shot_src: "https://i.imgur.com/7Vq4GGD.jpg",
        choiceA: "Ran (1985)",
        choiceB: "Casino (1995)",
        choiceC: "Unforgiven (1992)",
        choiceD: "Lock, Stock and Two Smoking Barrels (1998)",
        correct: "Unforgiven (1992)"
        }, {
        shot_src: "https://i.imgur.com/iWCciCx.jpg",
        choiceA: "The Secret in Their Eyes (2009)",
        choiceB: "2001: A Space Odyssey (1968)",
        choiceC: "Capernaum (2018)",
        choiceD: "Pan's Labyrinth (2006)",
        correct: "Pan's Labyrinth (2006)"
        }, {
        shot_src: "https://i.imgur.com/vlUqzdm.jpg",
        choiceA: "The Wolf of Wall Street (2013)",
        choiceB: "Trainspotting (1996)",
        choiceC: "The Truman Show (1998)",
        choiceD: "Stalker (1979)",
        correct: "The Wolf of Wall Street (2013)"
        }, {
        shot_src: "https://i.imgur.com/VHx0BL1.jpg",
        choiceA: "The Seventh Seal (1957)",
        choiceB: "The Secret in Their Eyes (2009)",
        choiceC: "The Truman Show (1998)",
        choiceD: "Chinatown (1974)",
        correct: "The Secret in Their Eyes (2009)"
        }, {
        shot_src: "https://i.imgur.com/QMlhENf.jpg",
        choiceA: "The Sixth Sense (1999)",
        choiceB: "The Secret in Their Eyes (2009)",
        choiceC: "My Neighbor Totoro (1988)",
        choiceD: "Jurassic Park (1993)",
        correct: "My Neighbor Totoro (1988)"
        }, {
        shot_src: "https://i.imgur.com/jqncfzE.jpg",
        choiceA: "Braveheart (1995)",
        choiceB: "Like Stars on Earth (2007)",
        choiceC: "Amadeus (1984)",
        choiceD: "Lock, Stock and Two Smoking Barrels (1998)",
        correct: "Lock, Stock and Two Smoking Barrels (1998)"
        }, {
        shot_src: "https://i.imgur.com/dDZNqqr.jpg",
        choiceA: "Raging Bull (1980)",
        choiceB: "Before Sunrise (1995)",
        choiceC: "Catch Me If You Can (2002)",
        choiceD: "Lock, Stock and Two Smoking Barrels (1998)",
        correct: "Raging Bull (1980)"
        }, {
        shot_src: "https://i.imgur.com/g4NSD8V.jpg",
        choiceA: "Stand by Me (1986)",
        choiceB: "There Will Be Blood (2007)",
        choiceC: "Million Dollar Baby (2004)",
        choiceD: "The Wages of Fear (1953)",
        correct: "There Will Be Blood (2007)"
        }, {
        shot_src: "https://i.imgur.com/nIXetZW.jpg",
        choiceA: "Stand by Me (1986)",
        choiceB: "Scarface (1983)",
        choiceC: "Three Billboards Outside Ebbing, Missouri (2017)",
        choiceD: "Lawrence of Arabia (1962)",
        correct: "Three Billboards Outside Ebbing, Missouri (2017)"
        }, {
        shot_src: "https://i.imgur.com/iT05ujj.jpg",
        choiceA: "Requiem for a Dream (2000)",
        choiceB: "Eternal Sunshine of the Spotless Mind (2004)",
        choiceC: "1917 (2019)",
        choiceD: "V for Vendetta (2005)",
        correct: "V for Vendetta (2005)"
        }, {
        shot_src: "https://i.imgur.com/jnGqPzJ.jpg",
        choiceA: "No Country for Old Men (2007)",
        choiceB: "Eternal Sunshine of the Spotless Mind (2004)",
        choiceC: "Shutter Island (2010)",
        choiceD: "V for Vendetta (2005)",
        correct: "No Country for Old Men (2007)"
        }, {
        shot_src: "https://i.imgur.com/rxWPfDx.jpg",
        choiceA: "Hacksaw Ridge (2016)",
        choiceB: "The Seventh Seal (1957)",
        choiceC: "In the Name of the Father (1993)",
        choiceD: "To Be or Not to Be (1942)",
        correct: "The Seventh Seal (1957)"
        }, {
        shot_src: "https://i.imgur.com/Um9UGSo.jpg",
        choiceA: "Ford v Ferrari (2019)",
        choiceB: "Persona (1966)",
        choiceC: "Shutter Island (2010)",
        choiceD: "Prisoners (2013)",
        correct: "Shutter Island (2010)"
        }, {
        shot_src: "https://i.imgur.com/FDlXpel.jpg",
        choiceA: "The Truman Show (1998)",
        choiceB: "Blade Runner (1982)",
        choiceC: "Room (2015)",
        choiceD: "Inside Out (2015)",
        correct: "Inside Out (2015)"
        }, {
        shot_src: "https://i.imgur.com/5HSxHM3.jpg",
        choiceA: "Warrior (2011)",
        choiceB: "Memories of Murder (2003)",
        choiceC: "Room (2015)",
        choiceD: "Inside Out (2015)",
        correct: "Warrior (2011)"
        }, {
        shot_src: "https://i.imgur.com/YqCDGMx.jpg",
        choiceA: "Hachi: A Dog's Tale (2009)",
        choiceB: "The Elephant Man (1980)",
        choiceC: "Ben-Hur (1959)",
        choiceD: "Into the Wild (2007)",
        correct: "The Elephant Man (1980)"
        }, {
        shot_src: "https://i.imgur.com/qVxjYB5.jpg",
        choiceA: "Network (1976)",
        choiceB: "Cool Hand Luke (1967)",
        choiceC: "Trainspotting (1996)",
        choiceD: "Million Dollar Baby (2004)",
        correct: "Trainspotting (1996)"
        }, {
        shot_src: "https://i.imgur.com/UuBoPrF.jpg",
        choiceA: "The Sixth Sense (1999)",
        choiceB: "The Battle of Algiers (1966)",
        choiceC: "PK (2014)",
        choiceD: "The Terminator (1984)",
        correct: "The Sixth Sense (1999)"
        }, {
        shot_src: "https://i.imgur.com/hq5n9qW.jpg",
        choiceA: "The Bandit (1996)",
        choiceB: "The Thing (1982)",
        choiceC: "The Big Lebowski (1998)",
        choiceD: "The Terminator (1984)",
        correct: "The Thing (1982)"
        }, {
        shot_src: "https://i.imgur.com/pHnnBKz.jpg",
        choiceA: "Jurassic Park (1993)",
        choiceB: "Tokyo Story (1953)",
        choiceC: "Gran Torino (2008)",
        choiceD: "Fargo (1996)",
        correct: "Jurassic Park (1993)"
        }, {
        shot_src: "https://i.imgur.com/lLMNHjE.jpg",
        choiceA: "Blade Runner (1982)",
        choiceB: "Gone with the Wind (1939)",
        choiceC: "Gran Torino (2008)",
        choiceD: "The Bridge on the River Kwai (1957)",
        correct: "Gone with the Wind (1939)"
        }, {
        shot_src: "https://i.imgur.com/FkFbeAz.jpg",
        choiceA: "Room (2015)",
        choiceB: "The Grand Budapest Hotel (2014)",
        choiceC: "Gran Torino (2008)",
        choiceD: "Sherlock Jr. (1924)",
        correct: "Room (2015)"
        }, {
        shot_src: "https://i.imgur.com/iw1MPyI.jpg",
        choiceA: "12 Years a Slave (2013)",
        choiceB: "Finding Nemo (2003)",
        choiceC: "Rush (2013)",
        choiceD: "Platoon (1986)",
        correct: "Finding Nemo (2003)"
        }, {
        shot_src: "https://i.imgur.com/RLcuHFR.jpg",
        choiceA: "Logan (2017)",
        choiceB: "Andrei Rublev (1966)",
        choiceC: "Rush (2013)",
        choiceD: "The Truman Show (1998)",
        correct: "The Truman Show (1998)"
        }, {
        shot_src: "https://i.imgur.com/yLJyl5h.jpg",
        choiceA: "Kill Bill: Vol. 1 (2003)",
        choiceB: "On the Waterfront (1954)",
        choiceC: "Gran Torino (2008)",
        choiceD: "The Truman Show (1998)",
        correct: "Kill Bill: Vol. 1 (2003)"
        }, {
        shot_src: "https://i.imgur.com/Vu8BqE9.jpg",
        choiceA: "Andhadhun (2018)",
        choiceB: "Gran Torino (2008)",
        choiceC: "Mary and Max (2009)",
        choiceD: "Klaus (2019)",
        correct: "Gran Torino (2008)"
        }, {
        shot_src: "https://i.imgur.com/2V434bi.jpg",
        choiceA: "Andhadhun (2018)",
        choiceB: "The 400 Blows (1959)",
        choiceC: "Hotel Rwanda (2004)",
        choiceD: "Wild Tales (2014)",
        correct: "Wild Tales (2014)"
        }, {
        shot_src: "https://i.imgur.com/lq9HC4i.jpg",
        choiceA: "Hacksaw Ridge (2016)",
        choiceB: "Witness for the Prosecution (1957)",
        choiceC: "The Dark Knight Rises (2012)",
        choiceD: "Avengers: Endgame (2019)",
        correct: "Hacksaw Ridge (2016)"
        }, {
        shot_src: "https://i.imgur.com/PLeatv7.jpg",
        choiceA: "Jurassic Park (1993)",
        choiceB: "Gone Girl (2014)",
        choiceC: "Blade Runner (1982)",
        choiceD: "The Bridge on the River Kwai (1957)",
        correct: "Gone Girl (2014)"
        }, {
        shot_src: "https://i.imgur.com/h3xaHmB.jpg",
        choiceA: "The Grand Budapest Hotel (2014)",
        choiceB: "Yojimbo (1961)",
        choiceC: "Children of Heaven (1997)",
        choiceD: "The Great Escape (1963)",
        correct: "The Grand Budapest Hotel (2014)"
        }, {
        shot_src: "https://i.imgur.com/RP2SXht.jpg",
        choiceA: "Finding Nemo (2003)",
        choiceB: "Before Sunrise (1995)",
        choiceC: "My Father and My Son (2005)",
        choiceD: "Memento (2000)",
        correct: "Before Sunrise (1995)"
        }, {
        shot_src: "https://i.imgur.com/x7l5oK2.jpg",
        choiceA: "Hotel Rwanda (2004)",
        choiceB: "The Help (2011)",
        choiceC: "Catch Me If You Can (2002)",
        choiceD: "The Invisible Guest (2016)",
        correct: "Catch Me If You Can (2002)"
        }, {
        shot_src: "https://i.imgur.com/SlEscDm.jpg",
        choiceA: "Oldboy (2003)",
        choiceB: "Ford v Ferrari (2019)",
        choiceC: "The Usual Suspects (1995)",
        choiceD: "Terminator 2: Judgment Day (1991)",
        correct: "Ford v Ferrari (2019)"
        }, {
        shot_src: "https://i.imgur.com/zs6PN4i.jpg",
        choiceA: "It Happened One Night (1934)",
        choiceB: "Ford v Ferrari (2019)",
        choiceC: "How to Train Your Dragon (2010)",
        choiceD: "The Princess Bride (1987)",
        correct: "How to Train Your Dragon (2010)"
        }, {
        shot_src: "https://i.imgur.com/FrrueFB.jpg",
        choiceA: "A Clockwork Orange (1971)",
        choiceB: "Scarface (1983)",
        choiceC: "L.A. Confidential (1997)",
        choiceD: "Prisoners (2013)",
        correct: "Prisoners (2013)"
        }, {
        shot_src: "https://i.imgur.com/uIbjVmR.jpg",
        choiceA: "12 Years a Slave (2013)",
        choiceB: "Logan (2017)",
        choiceC: "The Third Man (1949)",
        choiceD: "Wild Tales (2014)",
        correct: "12 Years a Slave (2013)"
        }, {
        shot_src: "https://i.imgur.com/HlzrZPy.jpg",
        choiceA: "12 Years a Slave (2013)",
        choiceB: "Into the Wild (2007)",
        choiceC: "The Matrix (1999)",
        choiceD: "The Lord of the Rings: The Two Towers (2002)",
        correct: "Into the Wild (2007)"
        }, {
        shot_src: "https://i.imgur.com/Ho7MNg7.jpg",
        choiceA: "The Matrix (1999)",
        choiceB: "Inception (2010)",
        choiceC: "Fight Club (1999)",
        choiceD: "One Flew Over the Cuckoo's Nest (1975)",
        correct: "The Matrix (1999)"
        }, {
        shot_src: "https://i.imgur.com/A2F43KE.jpg",
        choiceA: "The Matrix (1999)",
        choiceB: "Hachi: A Dog's Tale (2009)",
        choiceC: "Ben-Hur (1959)",
        choiceD: "Stand by Me (1986)",
        correct: "Hachi: A Dog's Tale (2009)"
        }, {
        shot_src: "https://i.imgur.com/lBNtP5A.jpg",
        choiceA: "Gangs of Wasseypur (2012)",
        choiceB: "Hachi: A Dog's Tale (2009)",
        choiceC: "Dead Poets Society (1989)",
        choiceD: "Before Sunset (2004)",
        correct: "Dead Poets Society (1989)"
        }, {
        shot_src: "https://i.imgur.com/qKRLlb4.jpg",
        choiceA: "Throne of Blood (1957)",
        choiceB: "Gladiator (2000)",
        choiceC: "Terminator 2: Judgment Day (1991)",
        choiceD: "Harry Potter and the Deathly Hallows: Part 2 (2011)",
        correct: "Harry Potter and the Deathly Hallows: Part 2 (2011)"
        }, {
        shot_src: "https://i.imgur.com/pPmHNIw.jpg",
        choiceA: "Andrei Rublev (1966)",
        choiceB: "The Secret in Their Eyes (2009)",
        choiceC: "Terminator 2: Judgment Day (1991)",
        choiceD: "My Neighbor Totoro (1988)",
        correct: "Andrei Rublev (1966)"
        }, {
        shot_src: "https://i.imgur.com/GYC1YDV.jpg",
        choiceA: "Andrei Rublev (1966)",
        choiceB: "The Old Guard (2020)",
        choiceC: "Greyhound (2020)",
        choiceD: "Watchmen (2019)",
        correct: "The Old Guard (2020)"
        }, {
        shot_src: "https://i.imgur.com/0ww6Lia.jpg",
        choiceA: "Tenet (2020)",
        choiceB: "The Old Guard (2020)",
        choiceC: "Watchmen (2019)",
        choiceD: "Deep Blue Sea 3 (2020)",
        correct: "Watchmen (2019)"
        }, {
        shot_src: "https://i.imgur.com/qV1bsVT.jpg",
        choiceA: "Tenet (2020)",
        choiceB: "Avengers: Endgame (2019)",
        choiceC: "The Silencing (2020)",
        choiceD: "The Gentlemen (2019)",
        correct: "The Gentlemen (2019)"
        }, {
        shot_src: "https://i.imgur.com/CKPIUWa.jpg",
        choiceA: "Klaus (2019)",
        choiceB: "The Lion King (1994)",
        choiceC: "WALL·E (2008)",
        choiceD: "The Gentlemen (2019)",
        correct: "Klaus (2019)"
        }]);
      });
};

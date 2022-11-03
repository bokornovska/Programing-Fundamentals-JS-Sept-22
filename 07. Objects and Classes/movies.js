function movies(arr) {
  let movies = [];

  arr.forEach((element) => {
    // console.log(element)

    if (element.includes(`addMovie `)) {
      let movie = element.replace(`addMovie `, ``);
      movies.push({ name: movie });
    //   console.log(movies[1])
    }else if(element.includes(`directedBy`)){
        let movieInfo = element.split(` directedBy `);
        let name = movieInfo[0];
        let director = movieInfo[1];

        movies.forEach(movie =>{
            if(movie.name === name){
                movie.director = director;
            };
        })
    }else if(element.includes(`onDate`)){

        let [name,date] = element.split(` onDate `);

        movies.forEach(movie =>{
           if(movie.name === name){
             movie.date = date;
           }
        })
    }
  });

  movies.forEach(movie =>{
    if(movie.name && movie.director && movie.date){
        console.log(JSON.stringify(movie))
    }
  })
}

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);

class movie {
    // #PG;
    constructor(title = " ", studio = " ", rating = " ") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  const movie1 = new movie("Sillunu Oru Kadhal","green studio","Pg");
  console.log(movie1);
  const movie2 = new movie("gilli", "AP International", "PG");
  console.log(movie2);
  const movie3 = new movie("LKG", "VELS Film International", "u");
  console.log(movie3);
  const movie4 = new movie("Vikram", "Raaj Kamal Films", "u");
  console.log(movie4);
  const movie5 = new movie("casino Royale", "EON productions", "pg13");
  console.log(movie5);
// Get all the countries from Asia continent /region using Filter function
const getasiancountries = () => {
      const array = new XMLHttpRequest();
      array.open("Get", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
      array.send();
      array.responseType = "json";

      array.onload = () => {
          const countries = array.response;
          const Asian = countries.filter(asia => asia.region == "Asia");
          console.log(Asian); 

      }
  };
getasiancountries();

// Get all the countries with a population of less than 2 lakhs using Filter function
const getpopulationless2lakh = () => {
      const array = new XMLHttpRequest();
      array.open("Get", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
      array.send();
      array.responseType = "json";

      array.onload = () => {
          const countries = array.response;
          const populationless_2lakh = getcountries.filter((population) => population.population < 2_00_000)
          console.log(populationless_2lakh);
      }
  };
  getpopulationless2lakh();


// Print the total population of countries using reduce function
  const totalpopulation = () => {
      const array = new XMLHttpRequest();
      array.open("Get", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
      array.send();
      array.responseType = "json";

      array.onload = () => {
          const countries = array.response;
          let population = getcountries.map(getcountries => getcountries.population)
          let allpopulation = population.reduce((a,b) => a + b)
          console.log(allpopulation);

      }
  };
  totalpopulation();


//   Print the following details name, capital, flag using forEach function
const ncf = () => {
  const array = new XMLHttpRequest();
  array.open("Get", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
  array.send();
  array.responseType = "json";

  array.onload = () => {
      const countries = array.response;
      countries.forEach(function countries(item) {  
        console.log("Name :" + item.name,"Capital :" + item.capital,"Flag :" + item.flag);
      })

  }
};
ncf();
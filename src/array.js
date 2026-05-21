const cities = ["Oyo", "Kano", "Kaduna", "Ikeja", "Ikoyi", "Dutse", "Ibadan", "Port Harcourt", "Ife"]

function printCities (cities) {
  for (let i = 0; i < cities.length; i++) {
    console.log(`${i + 1}: ${cities[i]}`)
  };
};

const addCity = (cities, city) => {
  cities.push(city)
  console.log(cities)
}

const removeLastCity = (cities) => {
  cities.pop()
  console.log(cities)
};

printCities(cities);
addCity(cities, "Abuja");
removeLastCity(cities);
/* const express = require("express") 
const app = express()
const cors = require("cors")
const axios = require("axios")

const corsOptions = {
    origin: ["http://localhost:5173"]
}

app.use(cors(corsOptions)); */
/* 
app.get("/api", (req, res) => {
    res.json({fruits: ["apples", "mango", "grapes"]})
});

app.listen(8080, () => { console.log("Server starting")}); */

const { json } = require("stream/consumers");


/* app.get("/catpic", async (req, res) => {
    try {
        const response = await fetch("https://cataas.com/cat"); 
        const arrayBuffer = await response.arrayBuffer();    

        res.setHeader("Content-Type", "image/jpeg");
        res.send(Buffer.from(arrayBuffer)); 

    } catch (error) {
        console.error("Error fetching cat image:", error);
        res.status(500).send("Error fetching cat image");
    }
});

app.listen(8000, () => console.log("Server running on port 8000")); */


let cities = []



const fetchCities = async () => {
    try {``
        const citiesData = await fetch("https://psgc.gitlab.io/api/cities.json");
        const jsonCitiesData = await citiesData.json();

        for (let key in jsonCitiesData) {
            if (jsonCitiesData[key]["name"].slice(0, 4) === "City") {
                cities.push(jsonCitiesData[key]["name"].slice(8));
            }
            else {
                cities.push(jsonCitiesData[key]["name"]);
            }
        }


        console.log(cities);
        const prompt = require('prompt-sync')();
        const city = prompt("Enter a city? ");

        let searchRank = [];

        const compareLetter = (city, letter) => {
            for (let i = 0; i < city.length; i++) {
                if (letter === city[i]) { return true; }
            }
            return false;
        }

        //  get each city
        for (let i = 0; i < cities.length; i++) {
            // unique chars
            const mySet = new Set([]);

            // each letter in the word
            // Iterate the current cities index only, dont start all over again 
            for (let j = 0; j < cities[i].length; j++) {

                // provide the current index
                if (compareLetter(city, cities[i][j])) {
                    mySet.add(cities[i][j]);
                }
            }

            searchRank.push([cities[i], mySet.size])

        }

        console.log(searchRank);

        // use the highest searchRanked city
        // display the info of the highest ranked city 
    }

    catch (error) {
        console.log(error);
    }
};

fetchCities();




/* 
const API_KEY = "4dd383510fc44c86af371231251710";
const city = "Manila";

const fetchWeather = async () => {

    try {
        const weatherData = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
        const data = await weatherData.json();
        
         if an async function returns a promise, does it only re
        turn a single promise? like if i have one await, the async
        function obsviosly returns a promise based  
        console.log(data);
    }
    catch {
        console.log("An error occured");
    }

};

fetchWeather(); */

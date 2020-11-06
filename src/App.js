import React, { useState } from "react";
import PlanetList from "./components/PlanetList.js";
import PlanetForm from "./components/PlanetForm";
import { ThemeProvider } from "styled-components";
import Theme from "./components/theme/theme.js";
import axios from "axios";
import "./App.css";

const App = () => {
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const [planetPost, setPlanetPost] = useState([
    {
      name: "Tatooine",
      rotation_period: 23,
      orbital_period: 304,
      //"diameter": "10465",
      // "climate": "arid",
      // "gravity": "1 standard",
      // "terrain": "desert",
      // "surface_water": "1",
      // "population": "200000",
    },
  ]);

  // const openDetails= ids

  const getData = () => {
    console.log("btn");
    setLoad(true);

    axios
      .get("https://swapi.dev/api/planets/1/") //Make this all later!! The Data in Zac's is an array already..
      .then((res) => {
        console.log("res", res);
        setPlanetPost(res.data); //Why does it need to be double clicked? Why doesn't it work the firstTime round?
        console.log("planetPost", planetPost);
        setLoad(false);
      })
      .catch((error) => {
        console.log(`Error:${error}`);
        setError(error);
      }, []);
  };
  //Add more planets and see if we can add a drop down for each, simialr, to web-guided-project-react-components2

  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <h1 className="Header">Star Wars Planets</h1>
        <PlanetForm getData={getData} load={load} />
        <PlanetList planetPostD={planetPost} error={error} />
        
      </div>
    </ThemeProvider>
  );
};

export default App;

/*
- I made a version that worked and populated the data out for one (due to the API listing 1), when I tried to have it load many it didn't work. So I saved a copy for 1
- In the second version, This verison I tried to loop through in planet list as When I looked at the data It looked like it was just an object rather than an array of objects
- when I tried to go back to the first version, I can't seem to clone the branch I was in . 
*/

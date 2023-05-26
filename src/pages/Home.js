import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { LinearProgress, Slider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  priceRange: {
    width: "200px",
  },
  destinationCard: {
    width: "400px",
    height: "200px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
    margin: "10px auto",
  },
  destinationCardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  destinationCardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  destinationCardDescription: {
    padding: "10px",
  },
  destinationCardButton: {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
  },
}));

const App = () => {
  const [priceRange, setPriceRange] = useState([100, 500]);
  const [destination, setDestination] = useState("");

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const classes = useStyles();

  useEffect(() => {
    const progress = (priceRange[0] / (priceRange[1] - priceRange[0])) * 100;
    document.querySelector(".linear-progress").style.width = progress + "%";
  }, [priceRange]);

  return (
    <div className={classes.root}>
      <h1>Travel Destinations</h1>
      <div className={classes.priceRange}>
        <label>Price Range</label>
        <Slider
          min={100}
          max={500}
          value={priceRange[0]}
          onChange={handlePriceRangeChange}
          step={100}
          size="small"
        />
        <LinearProgress className="linear-progress" variant="determinate" value={priceRange[0]} />
      </div>
      <div className={classes.destinationCard}>
        <img src="https://source.unsplash.com/random" className={classes.destinationCardImage} />
        <h2 className={classes.destinationCardTitle}>Paris</h2>
        <p className={classes.destinationCardDescription}>
        Lorem Epsum 
        </p>
        <button className={classes.destinationCardButton} onClick={() => console.log("Book trip to Paris")}>Book Trip</button>
      </div>
    </div>
>>>>>>> cc96ecbebf0588ac29d8d72e735557c4bf983e99
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

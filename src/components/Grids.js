import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "./Grid";

// here is the parent component 
const Grids = (props) => {
  const [gridStatus, setGridStatus] = useState({
    g1: false,
    g2: false,
    g3: false,
    g4: false,
    counts:0
  });

  console.log(gridStatus)
  const updateCount=(name)=>{

    console.log(name)
    if(gridStatus[name]===true){

        
        setGridStatus({
            ...gridStatus,
            counts:gridStatus.counts-1,
            [name]:false
        })
        
     

    }else{

        setGridStatus({
            ...gridStatus,
            counts:gridStatus.counts+1,
            [name]:true
        })
        
    }
  }

  
  return (
    <div className="Grids">
      <h1>Count: {gridStatus.counts}</h1>
      <div>
        {/* here wer are calling child component in parent components and sending props */}
        <Grid state={gridStatus.g1} name="g1" updateCount={updateCount} />
        <Grid state={gridStatus.g2} name="g2" updateCount={updateCount} />
        <Grid state={gridStatus.g3} name="g3" updateCount={updateCount} />
        <Grid state={gridStatus.g4} name="g4" updateCount={updateCount} />
      
      </div>
    </div>
  );
};

Grids.propTypes = {};

export default Grids;

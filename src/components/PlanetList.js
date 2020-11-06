import React from "react";
import Style from "styled-components";

const Styles = Style.div`{
  color:${(pr) => pr.theme.color};
  background-color:${(pr) => pr.theme.backgroundColor};
  flex-direction:${(pr) => pr.theme.flex};
  align-items:${(pr) => pr.theme.alignItems};
  justify-content:${(pr) => pr.theme.justifyContent};
}`;

const PlanetList = (props) => {
  return (
    <Styles>
      <>
        {props.error ? (
          <p>Error: {props.error}</p>
        ) : (
          props.planetPostD.map((pie) => (
            <>
              <h2>{pie.name}</h2>
              <p>{pie.rotation_period}</p>
              <p>{pie.orbital_period}</p>
              {/* <button onClick={()=> } */}
            </>
          ))
        )}
      </>
    </Styles>
  );
};

export default PlanetList;

//import of something is the issue
//
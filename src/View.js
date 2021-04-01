import React from "react";
import { useLocation, Link } from "react-router-dom";

const View = () => {
  const { state } = useLocation();

  
  return (
    <div>
        <div>
        <div className="card"  style={{ width:'650px', height:'650px',fontSize:'20px'}}>
        <img src={state.img} alt="Avatar" style={{ height:'400px'}}/>

<div className="container">
  <h4><b>{state.users.Brand}</b></h4> 
  <div><b>Vareity : </b>{state.users.Variety}</div>
  <div><b>Top Ten : </b>{state.users["Top Ten"]}</div>
  <div><b>Country : </b>{state.users.Country}</div>
  <div>
 <b>Stars:</b>{state.users.Stars}</div>


</div>
</div>





        </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default View;

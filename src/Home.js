import React ,{useEffect,useState} from 'react';
import './App.css';
import { Link } from "react-router-dom";
import ReactLoading from 'react-loading'

import axios from "axios";
function Home() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filter, setFilter] = React.useState([]);
const [result,setResult] =useState([]);
const [img,setImg] =useState([]);
const [a,b]=useState(false);
const handleChange = event => {
  setSearchTerm(event.target.value);
};

useEffect(() => {
  if (a===false){
  const search = async () =>{ 
    const { data } = await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json'
    );
  
  setResult(data);
  };
  const searchim = async () =>{ 
  const { data } = await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json'
  );
  
  setImg(data);
  };
  searchim();
  search();
b(true);}

    const results = result.filter(result =>
      result.Brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilter(results);
    console.log(results,filter,a,searchTerm);
  },[searchTerm]
 );

 function compare( a, b ) {
  
  if( !isFinite(a.Stars) && !isFinite(b.Stars) ) {
    return 0;
}
if( !isFinite(a.Stars) ) {
    return 1;
}
if( !isFinite(b.Stars) ) {
    return -1;
}
return a.Stars-b.Stars;
  }
  
 const sort22=()=>{
     let data1= [...result];
     data1.sort(compare);
     //console.log(data1);
     setResult(data1);
     console.log(result);
 }
 const sort232=()=>{
  let data1= [...filter];
  data1.sort(compare);
  //console.log(data1);
  setFilter(data1);
  console.log(result);
}


 if (filter.length>0){
   return(
     
     <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
       <button onClick={()=>sort232()}>Sort by rating</button>
       <h2> {filter.length} result found</h2> 
    <div className="cards">
    {filter.map((item,index) => {return(
        
        <Link key ={index} style={{ textDecoration: 'none', color: 'black'}}
        to={{
          pathname: `/${index}`,
          state: { img: img[index%6].Image,users: item }
        }}
      >
<div className="card" key ={index}>
<img src={img[index%6].Image} alt="Avatar" />
<div className="container">
<h4><b>{item.Brand}</b></h4> 
<div><b>Vareity : </b>{item.Variety}</div>
<div><b>Top Ten : </b>{item["Top Ten"]}</div>
<div><b>Country : </b>{item.Country}</div>
<div>
<b>Stars:</b>{item.Stars}</div>


</div>
</div>
      </Link>
      
     ) })}</div></div>
   )
 }
 else if( result.length>0) {
  return (




    <div className="App">
  <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
 <button onClick={()=>sort22()}>Sort by rating</button>
 <h2> {filter.length} result found</h2> 
      <div className="cards">
      {result.map((item,index) => {return(
          
          <Link key ={index} style={{ textDecoration: 'none', color: 'black'}}
          to={{
            pathname: `/${index}`,
            state: { img: img[index%6].Image,users: item }
          }}
        >
<div className="card" key ={index}>
<img src={img[index%6].Image} alt="Avatar" />
<div className="container">
  <h4><b>{item.Brand}</b></h4> 
  <div><b>Vareity : </b>{item.Variety}</div>
  <div><b>Top Ten : </b>{item["Top Ten"]}</div>
  <div><b>Country : </b>{item.Country}</div>
  <div>
 <b>Stars:</b>{item.Stars}</div>


</div>
</div>
        </Link>
        
       ) })}</div>

    </div>


  );
}
else{

    return(
      <div>
                    <ReactLoading type={"bars"} color={"grey"} />
  
  
      </div>
    )
  }




}

export default Home;

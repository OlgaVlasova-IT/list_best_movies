import './App.css';
import {useState} from "react";
import data from "./data"
import heartBorder from "./heart-regular.svg"
import heartSolid from "./heart-solid.svg"

function App() {

  let [movies, setMovies] = useState(data);

  const handleShowMore = (id) => {
         
    let temp = [] ;
  
     movies.forEach( movie=> {
    
      if (movie.id === id ) {
        const changedMovie = {...movie, showMore: !movie.showMore};
        temp.push(changedMovie)
      }
      else {
        temp.push(movie)
      }
     })
 
    setMovies(temp);

  }
  const removeItem = (id) => {
    const temp = movies.filter( movie => movie.id != id)
    setMovies(temp);

  }

  const changeImg = (id) => {
    let temp = [];
    movies.forEach( movie=> {
      if (movie.id === id ) {
        const changedMovie = {...movie, clickedLike: !movie.clickedLike};
        temp.push(changedMovie)
      }
      else {
          temp.push(movie)
      }
     })
     
    setMovies(temp);
   
  }

  
  return(
    <div className="App">
        <h3> Best comedies 2021 by Esquire</h3>
        <div className='movieCont'>
 
       { movies.map(  item => {

       const {id, movieName, desc, photo_portrait, showMore, clickedLike} = item;
       return(
      <div className="movie" key={id}> 
      <h4>{movieName}</h4>
      <img src={photo_portrait} width="200px" height="300px" ></img>
     <button className="btnLike" onClick={() => changeImg(id)}> <img className="heart"src={clickedLike ? heartSolid : heartBorder} width="20px"></img></button>
      <p className='par'> { showMore ?  desc :  desc.substring(0, 100) }  <button className ="btnShowMore" onClick ={() => {handleShowMore(id)}}>  {showMore ? " Show Less" : "Show More"} </button></p>
       <button className="btnRemove" onClick={()=>{removeItem(id)}} >REMOVE</button>
     </div>
    )})}
 </div>

 </div>)}

  

export default App;


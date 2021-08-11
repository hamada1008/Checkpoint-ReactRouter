import React , {useState, useEffect} from 'react'
import im from './catsu.png'
import genre from './genres'
import ReactStars from 'react-rating-stars-component'
import Addmovie from './Addmovie'
import {Switch} from '@material-ui/core'



const Navbar = ({Search,setSearch,Rsearch,setRsearch, Genr, setGenr , status , setStatus, dark, setDark}) => {

    // const [starsKey, setStarsKey] = useState(Math.random());
    // const [clic, setClic] = useState(" GenreClicked")

    function handlechange (event) {
        const newval = event.target.value
        setSearch(newval)

     }

    function starchanged (newRating) {
        const nrat = newRating
       setRsearch(nrat)
       console.log(Rsearch)

     }

     function filtergenre(event) {
        // setClic(" GenreClicked")
            const ger = event.target.value
            if (Genr.includes(ger) === false) {
            var nger = [...Genr , ger]
            event.target.className = "filterGenre GenreClicked"
            setGenr(nger) }
        else {   var nger = [...Genr]
         nger.splice(Genr.indexOf(ger) , 1);
            setGenr(nger);
            event.target.className = "filterGenre"
        }      
     }
     

     function destroy () {
        // setSearch('')
        // setGenr([])
        // setStatus(true)
        // setRsearch(0)
        // setStarsKey(Math.random())
        // setClic("")
        window.location.reload();
    
    }

    const [switc ,setSwitc] = useState (false);
    

    const handleChan = () => {
        setSwitc(!switc);
      };  



      function themed () {
        setDark (!dark)
      }



    return (
        <div className={!dark? "nav":"nav blacknav"}>
            

       <div  className={!dark? "appname":"appname black"} >
        <img src={im} alt="logo" /> <span className="title">EGYWORST</span>
        </div>

        <Addmovie 
        staty={status}
        setStaty={setStatus}/>

        <div className="filt">
        <input onChange={handlechange} type="text" placeholder="Enter a movie name" value={Search}/>
        </div>
        
        

        <div className="bygenre">
            
        
        {genre.map( (item) => <button value={item} onClick={filtergenre} className={"filterGenre"}>{item}</button> )}
        </div>
       
        <div className="starfilter">
        
        <ReactStars
            value = {Rsearch}
            onChange = {starchanged}
            // key={starsKey}
            size = "20"
        />        
       

        </div>
        <div className="btne reset">
            <button onClick={destroy}>Remove Filter</button>
        </div>

        <div className='themeswitcher'>
        <Switch
        checked={switc}
        onClick={handleChan}
        onChange={themed}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        color = 'black'
      />
        
          </div>
        </div>


       
    )
}

export default Navbar


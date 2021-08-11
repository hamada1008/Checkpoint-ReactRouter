import React from 'react'
import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom"

const Card = (props) => {
    var x = Math.round(props.rating/2)
    return (



        <div key={props.id} className={!props.dark? 'cardo': 'cardo blackcard'}>
         <h3>{props.name}   
         <Link to={`/trailer/${props.ids}`}>
         <button className="trailer">{'>'}</button> 
        </Link>
         </h3>
            <img className= "poster" src={props.image} alt="Movie poster" />
        <p className='dsc'>{props.desc}</p>
        
        <div className="extra">
        <ReactStars value={x} 
        edit = {false}
        isHalf = {true}
        size = "20"
        
        />
        <div className='gen'>
        <p>{props.genres}</p>
        </div>
        </div>
        </div>
    )
}



Card.propTypes = {
    name : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired,
    desc : PropTypes.string.isRequired
}





export default Card

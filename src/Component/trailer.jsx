import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import list from './Mlist'
import { useHistory } from 'react-router-dom';
import imag from './home.png'
    
const style1 =  {
    position: "absolute",
    display: "flex",
    flexFlow: "row wrap",
    width: "70%",
    height: "600px",
    margin: "7% auto",
    padding: "20px",
    backgroundImage: "linear-gradient(to bottom, #b7b7b7, #c4c4c4, #d2d2d2, #e0e0e0, #eeeeee)",
    border : "border: 5px groove #7D7863",
    boxShadow: "0px 7px 10px #666666",
    position : "relative",
    borderRadius: "15px",
justifyContent: 'center',
alignItems:'center'}

const style2 = {
    height : "80%",
    width : "80%" ,
}


const Trailer = ({match}) => {
    const source = list.filter ( el =>  el.id == match.params.id)
    const history = useHistory();
    return (
       
        
        <div style = {style1} className="trailerElement">
            
            <iframe style={style2} src={source[0].trailer } controls></iframe>
        
            {list.map ( el =>  el.id == match.params.id && <p style={{margin:"15px" , textAlign:"justify", width:"80%"}}>{el.desc}</p>)}

          
        
            <Link to="/"><img style={{position:'absolute', right: "5px" , bottom: '5px' ,width:'50px',height:'50px', border:'none', flexWrap:'nowarp', margin:'5px auto'}}src={imag} alt="home" /></Link>
             <Route exact path ="/" component={history.goBack} />



        </div>
       
    )
}

export default Trailer


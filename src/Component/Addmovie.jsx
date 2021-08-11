import React , {useState} from 'react'
import { Modal , Button } from 'react-bootstrap'
import list from './Mlist';

const Addmovie = (props) => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //states for adding
    const [named , setNamed] = useState('')
    const [imaged , setImaged] = useState('')
    const [desced , setDesced] = useState('')
    const [rated , setRated] = useState(0)
    const [genred , setGenred] = useState('')


    function validURL(str) {
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(str);
    }


    function sub () {

    if ((validURL(imaged) ==false) || rated > 10 || rated < 0 )

    {return alert('Please enter valid informations')}      
else {
        list.push(
            {
            id : list.length+1 ,
          name: named,
          image: imaged,
          rating: rated,
          genres: genred.split(','),
          desc: desced
            }
            
        )
        console.log(list)
        props.setStaty(!props.staty)
        setNamed('')
        setImaged('')
        setDesced('')
        setRated(0)
        setGenred('')
      handleClose()

      }
    }


const fc1 = (event) => {setNamed(event.target.value)}
const fc2 = (event) => {setImaged(event.target.value)}
const fc3 = (event) => {setDesced(event.target.value)}
const fc4 = (event) => {setRated(event.target.value)}
const fc5 = (event) => {setGenred(event.target.value)}



    

    return (
      <div className="add">
            <div className="btne add">
            <button onClick={handleShow}>Add a movie</button>
        </div>
        <div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className='modd'>
        <strong>Movie title:</strong>
         <input className = "addinput" value={named}type="text" onChange={fc1}/>
         <strong>Poster URL:</strong>
         <input className = "addinput" value={imaged}type="text" onChange={fc2}/>
         <strong>description:</strong>
        <textarea className="addinput" value={desced}name="desc" rows="4"onChange={fc3}></textarea>
         <strong>Rating /10:</strong>
         <input className = "addinput" value={rated}type="number" onChange={fc4}/>
         <strong>genres:</strong>
         <input className = "addinput" value={genred}type="text" onChange={fc5} />
         
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={sub}>Sumbit</Button>
        </Modal.Footer>
      </Modal>
      </div>
</div>
    )
}

export default Addmovie

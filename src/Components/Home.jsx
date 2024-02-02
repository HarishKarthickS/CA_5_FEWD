import {React,useState , useEffect} from "react";
import { Link } from "react-router-dom";
import './Home.css'
import Logo from '../assets/Logo.png'
import axios from 'axios';

const Home =()=>{
  // Using useState hook for store the data from api and to diplay content
  const [search, setSearch] = useState("")
  const [show,setShow]=useState(true)
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [book, setBook] = useState({});

  //Here useEffect is used to extract data from the api through axios and storing it the data
  useEffect(()=>{
    axios.get(`https://reactnd-books-api.udacity.com/books`,{ headers: { 'Authorization': 'whatever-you-want' }})
    .then(res=>{
      setData(res.data.books)
      console.log(res.data.books)
    })
    .catch(err=>{
      console.log("Status Code: "+err.response.status)
      if(err.response.status===404){
        console.log("Website not found")
      }
      else{
        console.log(err)
      }
    })
  },[])

  // handleKayDown function is used in search bar to search for books
  const handleKeyDown=(event)=>{
    if(event.key=='Escape'){
      setShow(false)
    }
    if(event.key=='Enter'){
      setShow(true)
    }
  }
  
  // handleBook function is used to display the modal and store data to the books.
  const handleBook = (book) => {
    setBook(book);
    setModal(true);
  }
  const modalConstainerStyle={
    height:'100vh',
    width:'100vw',
    position:'absolute',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    transform: 'translateY(0px)'
  }
  const modalStyle={
    height:'75vh',
    width:'66vw',
    backgroundColor: '#fff',
    display:'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    color:'#000',
    borderRadius:'25px',
  }
  return (
    <>
    {/*Declaring navbar of the website which contains title, logo, searchbar and register button*/}
      <div id="Navbar">

        {/* This div contains the logo and title of the website */}
        <div id="logo-div">
          <Link to="/"><img src={Logo} alt="" id="Logo"/></Link>
          <h2>Kalvium Books</h2>
        </div>

        {/* this div contains the search bar */}
        <div id="Search-container">
          <input type="text" 
            placeholder="🔍 Find yout dream book..."
            onChange={(e)=>{setSearch(e.target.value),setShow(true)}}
            onKeyDown={handleKeyDown}/>  
        </div>

        {/* this div contains the register button */}
        <div id="Navbar-1">
          <Link to="/form"><button id="Register">Register</button></Link>
        </div>
      </div> 

      {/*Declaring body for the website which contains Books*/}
      <div id="Body">
        
        {/* Declaring the div which contains the books and using filter and map to display the books*/}
        {show && data.filter(item=>item.title.toLowerCase().startsWith(search.toLowerCase())).map((item)=>{
          return(
            <div key={item.id}>
              <div key={item.id} className="Books-container">
                <img src={item.imageLinks.thumbnail} alt="" id="Book-Image"/>
                <div id="Flex" >
                  <h4>{item.title}</h4>
                  <h5 id="subtitle">{item.subtitle}</h5>
                  <h5 id="rate">Rating 🌟: {item.averageRating}/5</h5>
                  <div id="author"> 
                    <h5>Author:</h5>
                    {item.authors.map((author,index)=>{
                    return index>=0 && index<item.authors.length-1 ? <h5 key={index}>{author},</h5> : <h5 key={index}>{author}</h5>
                    })}
                  </div>
                  <div id="button">
                    <button id='info' onClick={() => {
                    handleBook(item);window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                    });}}>More Info</button>
                    <button id="free">
                      <a href={item.previewLink}>Free</a>
                    </button></div>
                </div>
              </div> 
              {modal && book.title === item.title && (
              <div className="modal-container" style={{modalConstainerStyle}}>
                <div className="modal" style={{
                  
                }}>
                  <div className="modal-header">
                    <span className="close" onClick={() => setModal(false)} style={{
                      position:'absolute',
                      right:'17.9%',
                      top:'11%',
                      cursor:'pointer',
                      fontSize:'48px',
                    }}>×</span>
                    <img src={item.imageLinks.thumbnail} alt="" />
                    <h2 style={{margin:0}}>{book.title}</h2>
                  </div>
                  <div className="modal-body">
                    <h3 style={{textAlign:'left',margin:'0px 60px'}}>Description:</h3>
                    <p style={{fontSize:'14px',textAlign:'left',margin:'0px 60px'}}>{book.description}</p>
                  </div>
                  <div className="modal-footer">
                    <button onClick={() => setModal(false)}>Close</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
    <footer>
      ©️2024 Copyright Kalvium Books  
    </footer>
        </>
    )
}

export default Home;
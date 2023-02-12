import {useState,useEffect} from "react";
import Header from "../Header/Header";
import "./Home.css";
import {Card,Spinner,Container,Row,Form} from 'react-bootstrap';
import axios from "axios";
import Footer from "../Footer/Footer";






function Home() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("")
    const[loading,setLoading] = useState(false)


   


    useEffect(() => {
      setLoading(true)
      axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) =>{setData(res.data) 
      setLoading(false)
       } )
      .catch((err) => console.log(err));
    
    },[]);

  
    

    return (
      <>
      <Header/>
      <Container>
      <Form className="d-flex mr-3 justify-content-center">
              <Form.Control
                type="search"
                placeholder="Search"
                className="my-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)} style={{width:"20rem",border:"2px solid black"}}
              />
            </Form>
          <Row>
            {loading ?  <div style={{width:"100%",height:"60vh",display:"flex",alignItems:"center",justifyContent:"center"}}><Spinner animation="border" variant="primary" /></div>:data.filter((val) => {
              if (
                val.title.toLowerCase().includes(search.toLocaleLowerCase())
              ) {
                return val;
              } else if (search == "") {
                return val;
              }
            }).map((item)=>{
              return (
                <Card style={{ width:"13rem",margin:"10px"}}>
                <Card.Img variant="top" src={item.url} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Card>    
              )
            })} 
    
      </Row>
     
      </Container>
      <Footer/>
      </>
    );
  };

export default Home;

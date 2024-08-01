import { useState, useEffect, useRef} from 'react'
import './List.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button, Container } from "react-bootstrap";
import Fetch from "./fetch";


export interface SWData {
  id: number;
  name: string;
  image: string;
  details: string;
}


function List() {

  function handleCatergorySelect(category : string) {
    setPage(1);
    setcategorySelect(category);
  }

  function handlePageChange(pageN: string) {
    if (pageN === "prev"){
      setPage(page-1)
    } else if(pageN === "next") {
      setPage(page+1)
    }
  }

  function handlePageResultChange(pageResultChange: number) {
    setPage(1);
    setResultLimit(pageResultChange);
  }

  function handleUserSearch (searchWord: string | null) {
      setSearchString(searchWord);
      console.log(searchString);
  }

  const [page, setPage] = useState<number>(1);
  const [categorySelect, setcategorySelect] = useState<string>(useRef("characters").current)
  const [resultLimit, setResultLimit] = useState<number>(10)
  //Array mit 0. Characters(SWData), 1. Creatures(Promise<SWData>), 2. Droids(Promise<SWData>), 3. Locations(Promise<SWData>), 4. Organizations(Promise<SWData>), 5. Species(Promise<SWData>), 6. Vehicles(Promise<SWData>) 
  const [swData, setSWData] = useState<SWData[][]>();
  const [searchString, setSearchString] = useState<string|null>(null);


  useEffect(() => {
    //Array mit 0. Characters(SWData), 1. Creatures(Promise<SWData>), 2. Droids(Promise<SWData>), 3. Locations(Promise<SWData>), 4. Organizations(Promise<SWData>), 5. Species(Promise<SWData>), 6. Vehicles(Promise<SWData>) 
    Fetch().then(e => (setSWData(e)));
    return () => {}
  }, [])

  let preCards:SWData[] = [];
  if (swData != undefined) {
    
    //filter Catergory
    switch (categorySelect) {
      case "characters":
        preCards = preCards.concat(swData[0])
        break;
      case "creatures":
        preCards = preCards.concat(swData[1])
        break;
      case "droids":
        preCards = preCards.concat(swData[2])
        break;
      case "locations":
        preCards = preCards.concat(swData[3])
        break;
      case "organizations":
        preCards = preCards.concat(swData[4])
        break;
      case "species":
        preCards = preCards.concat(swData[5])
        break;
      case "vehicles":
        preCards = preCards.concat(swData[6])
        break;
      case "all":
        let cardend:SWData[] = []
        for(let x of swData) {
          cardend = cardend.concat(x)
        }
        preCards = preCards.concat(cardend);
        break;
    } 
    if (searchString !== null) {   
      preCards = preCards.filter((word) => word.name.toLowerCase().includes(searchString.toLowerCase()));
    }
  }
  //filter page/results per Page
  const cards:SWData[] = preCards?.slice((page-1)*resultLimit, (page*resultLimit));



  return (
    <Container fluid>
      <input type="text" onChange={e => {handleUserSearch(e.target.value)}}></input>

      <Row xs={1} sm="auto">
        {cards?.map((x,idx) => (
          <Col key={idx}>
            <Card className="croped">
              <Card.Img src={x.image} alt={`Image of ${x.name}`} className="imged"/>
              <Card.Body>
                <Card.Title>{x.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>

          <Row className="rowed" style={{margin: "auto"}}>
            <Col>
            <Button className="button" value={"prev"} onClick={e => {handlePageChange(e.currentTarget.value)}} disabled={page<=1}>prev</Button>
            </Col>
            <Col>
            <Form.Select id="category" onChange={e => {handleCatergorySelect(e.target.value)}} className="selected">
            <option value={"characters"}>Character</option>
            <option value={"creatures"}>Creatures</option>
            <option value={"droids"}>Droids</option>
            <option value={"locations"}>Locations</option>
            <option value={"organizations"}>Organizations</option>
            <option value={"species"}>Species</option>
            <option value={"vehicles"}>Vehicles</option>
            <option value={"all"}>All</option>
          </Form.Select>
            </Col>
            <Col>
            <Button className="buttoned" value={"next"} onClick={e => {handlePageChange(e.currentTarget.value)}} disabled={page*resultLimit>=preCards.length}>next</Button>
            </Col>
          </Row>
          

          <Form.Select id="pageResult" onChange={e => {handlePageResultChange(Number(e.target.value))}} className="selected">
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={100}>100</option>
          </Form.Select>
    </Container>
  )
}

export default List

function pageButtons(params:type) {
  
}
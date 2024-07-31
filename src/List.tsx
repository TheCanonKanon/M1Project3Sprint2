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
    setpage(1);
    setcategorySelect(category);
  }

  function handlePageChange(pageN: number) {
    setpage(pageN);
  }

  function handlePageResultChange(pageResultChange: number) {
    setResultLimit(pageResultChange);
  }

  const [page, setpage] = useState<number>(1);
  const [categorySelect, setcategorySelect] = useState<string>(useRef("characters").current)
  const [cards, setCards] = useState<SWData[]>();
  const [preCards, setPreCards] = useState<SWData[]>();
  const [resultLimit, setResultLimit] = useState<number>(10)
  //Array mit 0. Characters(SWData), 1. Creatures(Promise<SWData>), 2. Droids(Promise<SWData>), 3. Locations(Promise<SWData>), 4. Organizations(Promise<SWData>), 5. Species(Promise<SWData>), 6. Vehicles(Promise<SWData>) 
  const [swData, setSWData] = useState<SWData[][]>();


  useEffect(() => {
    //Array mit 0. Characters(SWData), 1. Creatures(Promise<SWData>), 2. Droids(Promise<SWData>), 3. Locations(Promise<SWData>), 4. Organizations(Promise<SWData>), 5. Species(Promise<SWData>), 6. Vehicles(Promise<SWData>) 
    Fetch().then(e => (setSWData(e)))
    return () => {}
  }, [])

  useEffect(() => {
    setPreCards(undefined)
    if (swData != undefined) {
      //filter Catergory
      switch (categorySelect) {
        case "characters":
          setPreCards(swData[0])
          break;
        case "creatures":
          setPreCards(swData[1])
          break;
        case "droids":
          setPreCards(swData[2])
          break;
        case "locations":
          setPreCards(swData[3])
          break;
        case "organizations":
          setPreCards(swData[4])
          break;
        case "species":
          setPreCards(swData[5])
          break;
        case "vehicles":
          setPreCards(swData[6])
          break;
        case "all":
          const cardend:SWData[] = []
          for(let x of swData) {
            cardend.concat(x)
          }
          setPreCards(cardend);
          break;
      }

      //filter searchbar
      
      /* if(searchbar != null) {
        preCards?.filter((word) => word.name.toLocaleLowerCase().includes(searchbar.toLocaleLowerCase())
      } */
      


      //filter page/results per Page
      setCards(preCards?.slice((page-1)*resultLimit, (page*resultLimit)-1));
      console.log(cards,preCards);
    }

  },[categorySelect,page,resultLimit])
    


  return (
    <Container fluid>
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
            <Button className="button">prev</Button>
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
            <option value={"all"}></option>
          </Form.Select>
            </Col>
            <Col>
            <Button className="buttoned">next</Button>
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





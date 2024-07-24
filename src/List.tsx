import { useState, useEffect, useRef} from 'react'
import './List.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button, Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

function List() {

  //fetching the Lists from SWAPI
  async function fetchAPI (page: number, categorySelectValue: string, limit: number) {
    const fetchSW = await fetch(`https://starwars-databank-server.vercel.app/api/v1/${categorySelectValue}?page=${page}&limit=${limit}`)
    const SWData = await fetchSW.json();
    const cardio:CardsInfos[] =[]
    for (let x of SWData.data) {
      let y= 0;
        cardio.push({
          id: x._id,
          name: x.name,
          image: x.image,
        })
        y++;
    }
    return cardio;
  }

  interface CardsInfos {
    id: number;
    name: string;
    image: string;
  }

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
  const [cards, setCards] = useState<CardsInfos[]>();
  const [resultLimit, setResultLimit] = useState<number>(10)


  useEffect(() => {
    setCards(undefined);
    fetchAPI(page,categorySelect,resultLimit).then(e => setCards(e))
    

    return () => {}
  }, [page,categorySelect,resultLimit])
    


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





import { useState, useEffect, useRef, useContext} from 'react'
import '../css/List.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Button, Container } from "react-bootstrap";
import { swdataContext } from "./root";
import { Link } from "react-router-dom";


export interface SWData {
  id: string;
  name: string;
  image: string;
  details: string;
}


export default function List() {

  const swdata:any = useContext(swdataContext)

  const [page, setPage] = useState<number>(1);
  const [categorySelect, setcategorySelect] = useState<string>(useRef("characters").current)
  const [resultLimit, setResultLimit] = useState<number>(10)
  //Array mit 0. Characters(SWData), 1. Creatures(Promise<SWData>), 2. Droids(Promise<SWData>), 3. Locations(Promise<SWData>), 4. Organizations(Promise<SWData>), 5. Species(Promise<SWData>), 6. Vehicles(Promise<SWData>) 
  const [swData, setSWData] = useState<SWData[][]>();
  const [searchString, setSearchString] = useState<string>("");

  
  //Session Storage----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  const pageSessionString:string | null = sessionStorage.getItem("savedPage")
  let pageSession:number | null = null;
  if (pageSessionString !== null) {
    pageSession = +pageSessionString;
  }
  const resultLimitSessionString:string | null = sessionStorage.getItem("savedResultLimit")
  let resultLimitSession:number | null = null;
  if (resultLimitSessionString !== null) {
    resultLimitSession = +resultLimitSessionString;
  }
  const categorySelectSession:string | null = sessionStorage.getItem("savedCategorySelect")
  const searchStringSession:string | null = sessionStorage.getItem("savedsearchString")


  useEffect(() => {
    //Array mit 0. Characters(SWData), 1. Creatures(Promise<SWData>), 2. Droids(Promise<SWData>), 3. Locations(Promise<SWData>), 4. Organizations(Promise<SWData>), 5. Species(Promise<SWData>), 6. Vehicles(Promise<SWData>) 
    setSWData(swdata)
    
    //setSessionStorage if not null
    if(pageSession !== null) {
      setPage(pageSession)
    } 
    if (resultLimitSession !== null) {
      setResultLimit(resultLimitSession)
    } 
    if (categorySelectSession !== null) {
      setcategorySelect(categorySelectSession)
    } 
    if (searchStringSession !== null) {
      setSearchString(searchStringSession)
    }
    return () => {}
  }, [])
  


  function handleCatergorySelect(category : string) {
    setPage(1);
    setcategorySelect(category);
    sessionStorage.setItem("savedPage", String(1))
    sessionStorage.setItem("savedCategorySelect", category)

    setSearchString("");
    sessionStorage.setItem("savedsearchString", "")
  }

  function handlePageChange(pageN: string) {
    if (pageN === "prev"){
      setPage(page-1)
      sessionStorage.setItem("savedPage", String(page-1))
    } else if(pageN === "next") {
      setPage(page+1)
      sessionStorage.setItem("savedPage", String(page+1))
    }
  }

  function handlePageResultChange(pageResultChange: number) {
    setPage(1);
    setResultLimit(pageResultChange);
    sessionStorage.setItem("savedPage", String(1))
    sessionStorage.setItem("savedResultLimit", String(pageResultChange))
  }

  function handleUserSearch (searchWord: string) {
    setPage(1);
    setSearchString(searchWord);
    sessionStorage.setItem("savedPage", String(1))
    if (searchWord !== null) {
      sessionStorage.setItem("savedsearchString", searchWord)
    } 
  }


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
    <Container>
      <Row>
        <Col style={{margin: "1rem"}}>
          <Form.Label htmlFor="searchBar">Search:</Form.Label>
          <Form.Control id="searchBar" type="text" value={searchString} onChange={e => {handleUserSearch(e.target.value)}}/>
        </Col>
      </Row>
      <Row xs={1} sm="auto">
        {cards?.map((x,idx) => (
          <Col key={idx}>
            <Card className="croped" as={Link} to={`/details/${x.id}`}>
              <Card.Img src={x.image} alt={`Image of ${x.name}`} className="imged" loading="lazy"/>
              <Card.Body>
                <Card.Title>{x.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>

          <Row className="justify-content-md-center" xs="auto">
            <Col>
              <Button value={"prev"} onClick={e => {handlePageChange(e.currentTarget.value)}} disabled={page<=1}>prev</Button>
            </Col>
            <Col>
              <Form.Select id="category" value={categorySelect} onChange={e => {handleCatergorySelect(e.target.value)}}>
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
              <Button value={"next"} onClick={e => {handlePageChange(e.currentTarget.value)}} disabled={page*resultLimit>=preCards.length}>next</Button>
            </Col>
          </Row>
          <Row xs="auto" style={{justifyContent: "center"}}>
            <Col></Col>
            <Col>
              <Form.Select id="pageResult" value={resultLimit} onChange={e => {handlePageResultChange(Number(e.target.value))}}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={100}>100</option>
              </Form.Select>
            </Col>
            <Col></Col>
          </Row>
    </Container>
  )
}
import { useContext, useEffect, useState } from "react"
import { swdataContext } from "./root"
import { SWData } from "./List";
import { useParams } from "react-router-dom";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Detail () {

    const swdata = useContext(swdataContext);
    const paramID = useParams().id;

    const [detailPage,setDetailPage] = useState<SWData>({
        id: "string",
        name: "string",
        image: "string",
        details: "string",
    })
    
    for (let x of swdata) {
        const bool = x.find(e => e.id === paramID)
        if (bool != undefined) {
            useEffect(() => {
                setDetailPage(bool);
                return () => {}
              }, [])
            
            break;
        }
    }


    return (
    <Container>
      <Row>
        <Col>
          <Image src={detailPage.image} fluid />
        </Col>
      </Row>
      <Row>
        <Col>
        <p>{detailPage.name}</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>{detailPage.details}</p>
        </Col>
      </Row>
    </Container>
    )
}
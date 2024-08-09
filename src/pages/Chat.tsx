import { collection,  QueryDocumentSnapshot, onSnapshot, DocumentData } from "firebase/firestore"; 
import { Button, Col, Container, Row } from "react-bootstrap";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';

export default function Chat () {

    const [user,setUser] = useState<QueryDocumentSnapshot[] | undefined>();
    const [message,setMessage] = useState<QueryDocumentSnapshot[] | undefined>();

    const userArray:DocumentData[] = [];
    const messageArray:DocumentData[] = [];

      useEffect(() => {
        onSnapshot(collection(db, "User"), (snapshot) => {setUser(snapshot.docs)})
        onSnapshot(collection(db, "Chat"), (snapshot) => {setMessage(snapshot.docs)})
      },[])

    user?.forEach((e) => userArray.push(e.data()))
    message?.forEach((e) => messageArray.push(e.data()))

    function getUser (x:DocumentData) {
        if(userArray.every((r) => r != undefined)) {
            let p:number = userArray.findIndex((y) => y.uid === x.uid);
            if (p !== -1) {
                return (
                    userArray[p].email
                ) 
            }                     
        }
        return (
            "User nicht gefunden"
        ) 
    }

    function writeChat(e) {
        console.log(e);
        
    }

    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <h2>Chat Room</h2>
                    </Col>
                </Row>
                {messageArray?.map((x,idx) =>(
                    <Form.Group key={idx} className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Row>
                            <Col>
                                <Form.Control as="textarea" style={{resize: "none", height: "auto"}} readOnly={true}>{x.message}</Form.Control>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label className="text-right">{x.time.toDate().toDateString()}</Form.Label>
                            </Col>
                            <Col>
                                <Form.Label className="text-right">{getUser(x)}</Form.Label>
                            </Col>
                        </Row>
                    </Form.Group>
                    ))}
                </Form>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                    <Row>
                        <Col>
                            <Form.Control as="textarea" style={{resize: "none", height: "auto"}}></Form.Control>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button type="submit">Send</Button>
                        </Col>
                    </Row>
                    </Form.Group>                
                </Form>
        </Container>
    )
}
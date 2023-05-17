import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Footer.css';




 function ModalTracker(props) {
    const [tracker, setTracker] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [currentProgram, setCurrentProgram] = useState("");
    const [enrolledBy, setEnrolledBy] = useState("");
    const [session1, setSession1] = useState("");
    const [session2, setSession2] = useState("");
    const [session3, setSession3] = useState("");
    const [session4, setSession4] = useState("");
    const [session5, setSession5] = useState("");
    const [session6, setSession6] = useState("");
    const [error, setError] = useState("");

    
    async function getRowData() {
        const sheetId = 1933556202; // Replace with the ID of the second sheet
        const spreadsheetId = "1yb-gDrcujcj3EOALSN4lYD4xqRoL7A_bwGD-xoeI-lM"; // Replace with the ID of your spreadsheet
        const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=csv&id=${spreadsheetId}&gid=${sheetId}`;
        const response = await fetch(url);
        const text = await response.text();
        const rows = text.split("\n").map((row) => row.split(","));
        const headers = rows[0];
        return rows
          .slice(1)
          .map((row) =>
            headers.reduce((acc, curr, i) => ({ ...acc, [curr]: row[i] }), {})
          );
      }
    
      async function handleSubmit(event) {
        event.preventDefault();
        const credentials = await getRowData();
        const user = credentials.find((c) => c.trackingnum === tracker);
        if (user) {
            setFirstName(user.S_fName);
            setLastName(user.S_lName);
            setCurrentProgram(user.S_program);
            setEnrolledBy(user.Enrolled_By);
            setSession1(user.Session1);
            setSession2(user.Session2);
            setSession3(user.Session3);
            setSession4(user.Session4);
            setSession5(user.Session5);
            setSession6(user.Session6);

        } else {
          setError("Invalid Tracker Number. Please try again.");
        }
      }

    return (
        <Modal  {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header className='bg-black rounded-0' closeButton>
                <Modal.Title className='bg-black' id="contained-modal-title-vcenter">
                    <span className='modal-title'>SESSION TRACKER</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-black'>
                <Form onSubmit={handleSubmit} className='container bg-black text-white'>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="3">
                            <InputGroup >
                                <FloatingLabel controlId="floatingInput" label="Input Tracker" className="mb-3 bg-black" >
                                    <Form.Control className='bg-black rounded-0' type="tel" placeholder="Tracker Number" value={tracker} onChange={(event) => { setTracker(event.target.value); setError(null); }} />
                                </FloatingLabel> 
                            </InputGroup>
                            {error && <span className='text-danger'>{error}</span>}
                        </Form.Group>
                        <Form.Group as={Col} md="2">
                            <InputGroup className="mt-3">
                                <Button className="bg-primary rounded-0" type="submit" >Track</Button>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className='border'>
                        <Row className="mb-3 text-center">
                            <Form.Group as={Col} md="12">
                            <Form.Label className='text-white'> STUDENT SUMMARY </Form.Label>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                            <Form.Label className='text-white'> First Name: </Form.Label>{firstName && <span className='track-details'> {firstName}</span>}                 
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                            <Form.Label className='text-white'> Last Name: </Form.Label>{lastName && <span className='track-details'> {lastName}</span>}                    
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                            <Form.Label className='text-white'> Program: </Form.Label>{currentProgram && <span className='track-details'> {currentProgram}</span>}                    
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                            <Form.Label className='text-white'> Enrolled By: </Form.Label>{enrolledBy && <span className='track-details'> {enrolledBy}</span>}                     
                            </Form.Group>
                        </Row>
                    </Row>
                    <Row className='border'>
                        <Row className="text-center">
                            <Form.Group as={Col} md="12">
                            <Form.Label className='text-white'> SESSION SUMMARY </Form.Label>
                            </Form.Group>
                        </Row>
                        <Row className="m-1 text-center">
                            <Form.Group as={Col} md="4">
                            <Form.Label className='text-white '> SESSION 1 </Form.Label><br/>
                            <Form.Label className='text-white'> Date Completed: </Form.Label>{session1 && <span className='track-details'> {session1}</span>} 
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                            <Form.Label className='text-white'> SESSION 2 </Form.Label><br/>
                            <Form.Label className='text-white'> Date Completed: </Form.Label>{session2 && <span className='track-details'> {session2}</span>}                  
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                            <Form.Label className='text-white'> SESSION 3 </Form.Label><br/>
                            <Form.Label className='text-white'> Date Completed: </Form.Label>{session3 && <span className='track-details'> {session3}</span>}                    
                            </Form.Group>
                        </Row>
                        <Row className="m-1 text-center ">
                            <Form.Group as={Col} md="4">
                            <Form.Label className='text-white '> SESSION 4 </Form.Label><br/>
                            <Form.Label className='text-white'> Date Completed: </Form.Label>{session4 && <span className='track-details'> {session4}</span>} 
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                            <Form.Label className='text-white'> SESSION 5 </Form.Label><br/>
                            <Form.Label className='text-white'> Date Completed: </Form.Label>{session5 && <span className='track-details'> {session5}</span>}                  
                            </Form.Group>
                            <Form.Group as={Col} md="4">
                            <Form.Label className='text-white'> SESSION 6 </Form.Label><br/>
                            <Form.Label className='text-white'> Date Completed: </Form.Label>{session6 && <span className='track-details'> {session6}</span>}                    
                            </Form.Group>
                        </Row>
                        
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer className='bg-black rounded-0'>
            <Button className='rounded-0' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
  }
  
export default ModalTracker;
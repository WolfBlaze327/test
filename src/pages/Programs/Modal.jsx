import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';




function ProgramModal(props) {
    const styles = {WebkitAppearance: 'radio'}
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [houseNum, setHouseNum] = useState('');
    const [barangay, setBarangay] = useState('');
    const [city, setCity] = useState('');
    const [location, setLocation] = useState('');
    const [pax, setPax] = useState('');
    const [program, setProgram] = useState('');
    const [referenceNum, setReferenceNum] = useState("");
    const [total, setTotal] = useState(0);
    const [downpayment, setDownpayment] = useState(0);
    const [firstNameError, setFirstNameError] = useState(null);
    const [lastNameError, setLastNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [houseNumError, setHouseNumError] = useState(null);
    const [phoneNumberError, setPhoneNumberError] = useState(null);
    const [barangayError, setBarangayError] = useState(null);
    const [cityError, setCityError] = useState(null);
    const [locationError, setLocationError] = useState(null);
    const [paxError, setPaxError] = useState(null);
    const [programError, setProgramError] = useState(null);
    const [referenceNumError, setReferenceNumError] = useState("");
    const [data, setData] = useState
        (
          {
            FName: "",
          }
        )
    //const {FName, LName, Email, PhoneNum, HouseNum, Barangay, City, Program, ChosenLocation, Pax, TotalAmount} = data;
    
    
    const computation = (pax1,program1,location1) => {
      if (!program1) {
        setProgramError('Select a Program');
        setTotal(0);
        setDownpayment(0);
        console.log("program1"+program1);
        return;
      }
      if (program1 === "--Select Program--") {
        setProgramError('Select a Program');
        setTotal(0);
        setDownpayment(0);
        console.log("program2"+program1);
        return;
      }
      if (!pax1) {
        setPaxError('Please enter number of enrollee');
        setTotal(0);
        setDownpayment(0);
        console.log("pax1"+pax1);
        return;
      }
      if (pax1 <= 0) {
        setPaxError('Please enter number of enrollee');
        setTotal(0);
        setDownpayment(0);
        console.log("pax2"+pax1);
        return;
      }
      if (!location1) {
        setLocationError('Please Select Location');
        setTotal(0);
        setDownpayment(0);
        console.log("location"+location1);
        return;
      }
      if (program1 === "team" && location1 === "southwoods") {
        setLocationError('Swimming Team is not available in Southwoods');
        setDownpayment(0);
        setTotal(0);
        return;
      }

      setDownpayment(pax1*1000+" *Non-refundable");
      switch(location1)
        {
          case "kalipayan":
          {
            switch(program1)
            {
              case "toddler":
                setTotal(pax1*6500);
                return;
              case "kids":
                setTotal(pax1*5500);
                return;
              case "adults":
                setTotal(pax1*4500);
                return;
              case "team":
                setTotal(pax1*4500);
                return;
              default: 
                setTotal(0);
                setDownpayment(0);
            }
          
          break;
          }
          case "southwoods":
          {
            switch(program1)
            {
              case "toddler":
                setTotal(pax1*7500);
                return;
              case "kids":
                setTotal(pax1*6500);
                return;
              case "adults":
                setTotal(pax1*5500);
                return;
              default: 
                setDownpayment(0);
                setTotal(0);
            }
          break;
          }
          default: 
            setTotal(0);
            setDownpayment(0);
        }
    };

    const handleSubmit = (event) => {
      console.log("test");
        event.preventDefault();
        
        // Form validation
        if (!firstName) {
          setFirstNameError('Please enter your first name');
          return;
        }
        if (!lastName) {
          setLastNameError('Please enter your last name');
          return;
        }
        if (!email) {
          setEmailError('Please enter your email');
          return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
          setEmailError('Please enter a valid email');
          return;
        }
        if (!phoneNumber) {
          setPhoneNumberError('Please enter your phone number');
          return;
        }
        if (!/^63\d{10}$/.test(phoneNumber)) {
          setPhoneNumberError('Please enter a valid phone number starting with 63 and with 10 digits after');
          return;
        }
        if (!houseNum) {
          setHouseNumError('Please enter your House Num');
          return;
        }
        if (!barangay) {
          setBarangayError('Please enter your Barangay');
          return;
        }
        if (!city) {
          setCityError('Please enter your City');
          return;
        }
        if (!program) {
          setProgramError('Select a Program');
          return;
        }
        if (program === "--Select Program--") {
          setProgramError('Select a Program');
          return;
        }
        if (!pax) {
          setPaxError('Please enter number of enrollee');
          return;
        }
        if (pax <= 0) {
          setPaxError('Please enter number of enrollee');
          return;
        }
        if (!location) {
          setLocationError('Please Select Location');
          return;
        }
        if (referenceNum.length !== 13) {
          setReferenceNumError('Invalid Reference Number');
          return;
        }
        
        try{
          const response = fetch('https://v1.nocodeapi.com/wolfblaze/google_sheets/ShMylIlPrkStPfCt?tabId=Sheet1', 
          {
            method: 'POST',
            headers:
            {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify([[firstName, lastName, email, phoneNumber, houseNum, barangay, city, location, pax, program, total, referenceNum, new Date().toLocaleString()]])
          });
          response.json();
          setData({...data, FName: "", LName: "",  Email: "", PhoneNum: "", HouseNum: "", Barangay: "", City: "", Program: "", ChosenLocation: "", Pax: "", TotalAmount: "", GCash: ""})
        } catch (err){
          console.log(err);
        }
        
        // Submit the form
        console.log('Submitting form:', { firstName, lastName, email, phoneNumber, houseNum, barangay, city, location, pax, program, total, referenceNum });
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setHouseNum('');
        setBarangay('');
        setCity('');
        setLocation('');
        setPax('');
        setProgram('');
        setTotal('');
        setReferenceNum('');
        setDownpayment('');
        setFirstNameError(null);
        setLastNameError(null);
        setEmailError(null);
        setPhoneNumberError(null);
        setHouseNumError(null);
        setBarangayError(null);
        setCityError(null);
        setLocationError(null);
        setPaxError(null);
        setProgramError(null);
        setReferenceNumError(null);
        
        
      };

    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className='bg-black' closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            FILL UP THE FORM
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-black'>
          <Form onSubmit={handleSubmit} className='container'>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                {/* <InputGroup>
                  <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
                  <Form.Contro id="FName" type="text" placeholder="First Name" value={firstName} onChange={(event) => { setFirstName(event.target.value); setFirstNameError(null); }}/> */}
                  <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3 bg-black text-white" >
                    <Form.Control id="FName" className='bg-black rounded-0 text-white' type="text" placeholder="First Name" value={firstName} onChange={(event) => { setFirstName(event.target.value); setFirstNameError(null); }} />
                  </FloatingLabel>
                {/* </InputGroup> */}
                {firstNameError && <span className='text-danger'>{firstNameError}</span>}
              </Form.Group>
              <Form.Group as={Col} md="6">
                <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3 bg-black text-white" >
                  <Form.Control id="LName" className='bg-black rounded-0 text-white' type="text" placeholder="Last Name" value={lastName} onChange={(event) => { setLastName(event.target.value); setLastNameError(null); }} />
                </FloatingLabel>
                {/* <InputGroup>
                  <InputGroup.Text id="basic-addon2">Last Name</InputGroup.Text>
                  <Form.Control id="LName" type="text" placeholder="Last Name" value={lastName} onChange={(event) => { setLastName(event.target.value); setLastNameError(null); }}/>
                </InputGroup> */}
                {lastNameError && <span className='text-danger'>{lastNameError}</span>}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <FloatingLabel controlId="floatingInput" label="Email@example.com" className="mb-3 bg-black text-white" >
                  <Form.Control id="Email" className='bg-black rounded-0 text-white' type="email" placeholder="Email@example.com" value={email} onChange={(event) => { setEmail(event.target.value); setEmailError(null); }} />
                </FloatingLabel>
                {/* <InputGroup>
                  <InputGroup.Text id="basic-addon3">Email@example.com</InputGroup.Text>
                  <Form.Control id="Email" type="email" placeholder="Email" value={email} onChange={(event) => { setEmail(event.target.value); setEmailError(null); }}/>
                </InputGroup> */}
                {emailError && <span className='text-danger'>{emailError}</span>}
              </Form.Group>
              <Form.Group as={Col} md="6">
                <FloatingLabel controlId="floatingInput" label="Phone number start with 63" className="mb-3 bg-black text-white" >
                  <Form.Control id="phoneNumber" className='bg-black rounded-0 text-white' pattern="^63\d{10}$" type="tel" placeholder="First Name" value={phoneNumber} onChange={(event) => { setPhoneNumber(event.target.value); setPhoneNumberError(null); }} />
                </FloatingLabel>
                {/* <InputGroup>
                  <InputGroup.Text id="basic-addon4">Phone number</InputGroup.Text>
                  <Form.Control id="phoneNumber" type="tel" pattern="^63\d{10}$" placeholder="start with 63" value={phoneNumber} onChange={(event) => { setPhoneNumber(event.target.value); setPhoneNumberError(null); }}/>
                </InputGroup> */}
                {phoneNumberError && <span className='text-danger'>{phoneNumberError}</span>}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Label for="Brgy" className='text-white'>Address:</Form.Label>
              <Form.Group as={Col} md="6">
                <FloatingLabel controlId="floatingInput" label="House No./St./Village" className="mb-3 bg-black text-white" >
                  <Form.Control id="House_Num" className='bg-black rounded-0 text-white' type="text" placeholder="House No./St./Village" value={houseNum} onChange={(event) => { setHouseNum(event.target.value); setHouseNumError(null); }} />
                </FloatingLabel>
                {/* <InputGroup>
                  <InputGroup.Text id="basic-addon5">House No./St./Village</InputGroup.Text>
                  <Form.Control id="House_Num" type="text" value={houseNum} onChange={(event) => { setHouseNum(event.target.value); setHouseNumError(null); }}/>
                </InputGroup> */}
                {houseNumError && <span className='text-danger'>{houseNumError}</span>}
              </Form.Group>
              <Form.Group as={Col} md="3">
                <FloatingLabel controlId="floatingInput" label="Barangay" className="mb-3 bg-black text-white" >
                  <Form.Control id="House_Num" className='bg-black rounded-0 text-white' type="text" placeholder="Barangay" value={barangay} onChange={(event) => { setBarangay(event.target.value); setBarangayError(null); }} />
                </FloatingLabel>
                {/* <InputGroup>
                  <InputGroup.Text id="basic-addon6">Barangay</InputGroup.Text>
                  <Form.Control id="Brgy" type="text" value={barangay} onChange={(event) => { setBarangay(event.target.value); setBarangayError(null); }}/>
                </InputGroup> */}
                {barangayError && <span className='text-danger'>{barangayError}</span>}
              </Form.Group>
              <Form.Group as={Col} md="3">
                <FloatingLabel controlId="floatingInput" label="City" className="mb-3 bg-black text-white" >
                  <Form.Control id="City" className='bg-black rounded-0 text-white' type="text" placeholder="City" value={city} onChange={(event) => { setCity(event.target.value); setCityError(null); }} />
                </FloatingLabel>
                {/* <InputGroup>
                  <InputGroup.Text id="basic-addon7">City</InputGroup.Text>
                  <Form.Control id="City" type="text" value={city} onChange={(event) => { setCity(event.target.value); setCityError(null); }}/>
                </InputGroup> */}
                {cityError && <span className='text-danger'>{cityError}</span>}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Row className="mb-3">
                  <Form.Group as={Col} md="4">
                    <FloatingLabel controlId="floatingInput" label="No. of Pax" className="mb-3 bg-black text-white" >
                      <Form.Control id="pax" className='bg-black rounded-0 text-white text-center' type="number" placeholder="No. of Pax" value={pax} onChange={(event) => { setPax(event.target.value); setPaxError(null); computation(event.target.value,program,location);}} />
                    </FloatingLabel>
                    {/* <InputGroup>
                    <InputGroup.Text id="basic-addon8">No. of Pax</InputGroup.Text>
                      <Form.Control id="pax" type="number" placeholder="0" value={pax} onChange={(event) => { setPax(event.target.value); setPaxError(null); computation(event.target.value,program,location);}}/>
                    </InputGroup> */}
                    {paxError && <span className='text-danger'>{paxError}</span>}
                  </Form.Group> 
                  <Form.Group as={Col} md="8">
                    <Form.Select className="bg-black text-white" aria-label="Default select example" onChange={(event) => { setProgram(event.target.value); setProgramError(null); computation(pax,event.target.value,location);}}>
                      <option>--Select Program--</option>
                      <option value="toddler">Toddler</option>
                      <option value="kids">Kids</option>
                      <option value="adults">Adult</option>
                      <option value="team">Swimming Team</option>
                    </Form.Select>
                    {programError && <span className='text-danger'>{programError}</span>}
                  </Form.Group>
                </Row>
                <Row>
                  <Row className="mb-3">
                  <Form.Group as={Col} md="=12">
                    <InputGroup>
                      <InputGroup.Text className='text-white' id="basic-addon9">Downpayment:</InputGroup.Text>
                      <Form.Control disabled id="downpayment" type="text" placeholder="0" value={downpayment} />
                    </InputGroup>
                  </Form.Group>
                  </Row>
                  <Row>
                  <Form.Group as={Col} md="12">
                <InputGroup>
                  <InputGroup.Text className='text-white' id="basic-addon9">Total:</InputGroup.Text>
                  <Form.Control disabled id="total" type="number" placeholder="0" value={total} />
                </InputGroup>
              </Form.Group>
              </Row>
                </Row>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label for="location" className='text-white'>Choose Location</Form.Label>
                <Form.Check type="radio" className='text-white' style={styles} name="location" id="kalipayan" label="Kalipayan Resort - Dasmarinas Cavite" value="kalipayan" onChange={(event) => { setLocation(event.target.value); setLocationError(null); computation(pax,program,event.target.value);}}/>
                <Form.Check type="radio" className='text-white' name="location" id="southwoods" label="Soutwoods - Carmona Cavite" value="southwoods" onChange={(event) => { setLocation(event.target.value); setLocationError(null); computation(pax,program,event.target.value);}}/>
                {locationError && <span className='text-danger'>{locationError}</span>}
                <FloatingLabel controlId="floatingInput" label="Gcash Ref. Number" className="mb-3 bg-black text-white" >
                      <Form.Control id="referenceNum" className='bg-black rounded-0 text-white' type="tel" placeholder="Gcash Ref. Number" value={referenceNum} onChange={(event) => { setReferenceNum(event.target.value); setReferenceNumError(null);}} />
                </FloatingLabel>
                {referenceNumError && <span className='text-danger'>{referenceNumError}</span>}
              </Form.Group>
            </Row>
            {/* <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <InputGroup>
                  <InputGroup.Text id="basic-addon9">Total:</InputGroup.Text>
                  <Form.Control disabled id="total" type="number" placeholder="0" value={total} />
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="6"> */}
                {/* <InputGroup>
                  <InputGroup.Text id="basic-addon4">Gcash Ref. Number</InputGroup.Text>
                  <Form.Control id="referenceNum" type="tel" value={referenceNum} onChange={(event) => { setReferenceNum(event.target.value); setReferenceNumError(null); }}/>
                </InputGroup> */}
                {/* {referenceNumError && <span className='text-danger'>{referenceNumError}</span>} */}
              {/* </Form.Group>
            </Row> */}
            {/* <Form.Group className="mb-3" >
              <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid"/>
            </Form.Group> */}
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-black rounded-0'>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default ProgramModal;
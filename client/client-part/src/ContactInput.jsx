import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormGroup, Col, FormControl} from 'react-bootstrap';

function ContactInput() {
  return (
<Form horizontal>
  <FormGroup controlId="formName">
    <Col  sm={7}>
      <p className="contact-text">Your Name</p>
    </Col>
    <Col sm={10}>
      <FormControl type="name" placeholder="name" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formEmail">
    <Col  sm={7}>
      <p className="contact-text">Email Address</p>
    </Col>
    <Col sm={10}>
      <FormControl type="Email" placeholder="Email" />
    </Col>
  </FormGroup>
    <FormGroup controlId="formCompanyName">
    <Col  sm={7}>
      <p className="contact-text">Company (optional)</p>
    </Col>
    <Col sm={10}>
      <FormControl type="Company" placeholder="" />
    </Col>
  </FormGroup>
    <FormGroup controlId="formMessage">
    <Col sm={10} className="contact-message">
      <FormControl as="textarea" rows={3} type="Email" placeholder="Email" />
    </Col>
  </FormGroup>


  <FormGroup>
    <Col smOffset={2} sm={10} className="contact-button">
      <div><p >I'll be sure to get back to you as soon as I can.</p></div>
      <div><Button type="submit">Submit</Button></div>
    </Col>
  </FormGroup>
</Form>
  );
}

export default ContactInput;
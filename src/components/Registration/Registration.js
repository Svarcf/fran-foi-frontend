import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';

class Registration extends React.Component {
    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Registration;
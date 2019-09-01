import React from 'react';
import {Button, Container, Form} from "react-bootstrap";


class LeagueFormJoin extends React.Component {
    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlId="formGroupLeagueId">
                        <Form.Label>League code</Form.Label>
                        <Form.Control type="text" placeholder="Enter league code" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>

        );
    }
}

export default LeagueFormJoin;
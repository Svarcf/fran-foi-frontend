import React from 'react';
import {Container, Table} from 'react-bootstrap';
import ReactLoading from "react-loading";
import "./fixture.css"


class Fixture extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8081/api/fixtures")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded} = this.state;
        if (error) {
            return <div>Error</div>
        } else if (!isLoaded) {
            return (
                <div className="loading-center align-middle">
                    <ReactLoading type={"spin"} color="#000" height={'5%'} width={'5%'} />
                </div>
            )
        } else if (isLoaded) {
            this.items = this.state.items.map(item =>
                <tr key={item.fixtureId}>
                    <td>{new Date(item.eventDate).toLocaleDateString('en-DE')}</td>
                    <td>{item.homeTeam.name}</td>
                    <td>{item.score}</td>
                    <td>{item.awayTeam.name}</td>
                    <td>{item.venue}</td>
                </tr>
            );
            return (
                <Container>
                    <h1 className="fixture-title">Premier League 2018/2019</h1>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Home Team</th>
                                <th>Score</th>
                                <th>Away Team</th>
                                <th>Venue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.items}
                        </tbody>
                    </Table>
                </Container>
            );
        }
    }
}

export default Fixture;
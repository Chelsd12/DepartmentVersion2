import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Card, Button, Icon, Container } from 'semantic-ui-react';

class Departments extends React.Component {
    state = { departments: [] };

    componentDidMount() {
        axios.get("/api/departments")
            .then( res => {
                this.setState({ departments: res.data });
            })
    };//end of componentDidMount

    renderDepartments = () => {
        return this.state.departments.map( d => (
            <Card>
                <Card.Header>
                    <Link to={`/departments/${d.id}/items`} key={d.id}>
                        <ul>{ d.name }</ul>
                    </Link>
                </Card.Header>
            </Card>
        ));//end of return
    };//end of renderDepartments

    render() {
        return (
            <Container>
                <br />
                <Link to="/departments/new">
                <Button icon color="blue">
                    <Icon name="add" />
                        New Department
                </Button>
                </Link>
                <br />
                <br />
                <br />
                <Card.Group>   
                    { this.renderDepartments() }
                </Card.Group>
            </Container>
        )//end of return
    };//end of render
};//end of class Departments

// const ButtonLink = styled.a`
//   float: left;
//   padding: 10px 30px;
//   border-radius: 10px;
// `;

export default Departments;
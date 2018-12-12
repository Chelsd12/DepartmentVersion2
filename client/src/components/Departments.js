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

    handleDelete = () => {
        const { id } = this.state;
        const remove = window.confirm("Are you sure you want to delete this department?")
        if (remove)
        axios.delete(`/api/departments/${id}`)
          .then( res => {
            const departments = this.state.departments.filer( d => {
                if (d.id !== id)
                return d;
            })
            this.setState({ departments });
          })
    };//end of handleDelete

    renderDepartments = () => {
        const { id } = this.state;
        return this.state.departments.map( d => (
            <Card>
                <Card.Content textAlign="center">
                <Card.Header>
                        <Title>{ d.name }</Title>
                    <br />
                </Card.Header>
                    <Link to={`/departments/${d.id}/items`} key={d.id}>
                        <Button color="blue">
                            View
                        </Button>
                    </Link>
                </Card.Content>
                <Card.Content textAlign="center">
                    <Link to={`/departments/${id}/edit`}>
                        <Button icon inverted color="blue">
                            <Icon name="pencil" />
                                Edit
                        </Button>
                    </Link>
                        <Button icon inverted color="red" onClick={this.handleDelete}>
                            <Icon name="trash" />
                                Delete
                        </Button>
                </Card.Content>
            </Card>
        ));//end of return
    };//end of renderDepartments

    render() {
        return (
            <Container textAlign="center">
                <br />
                <Link to="/departments/new">
                <Button icon color="green">
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

const Title = styled.h1`
  font-size: 1.5em !important;
  text-align: center !important;
`;

export default Departments;
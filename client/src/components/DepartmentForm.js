import React from 'react';
import axios from 'axios';
import { Container, Form, Header } from 'semantic-ui-react';

class DepartmentForm extends React.Component {
    state = { name: "" };

    handleChange = (e) => {
        const { target: { name, value } } = e;
        this.setState({ [name]: value });
    };//end of handleChange

    handleSubmit = (e) => {
        e.preventDefault();
        const department = { ...this.state };
        const { id } = this.props.match.params;
        if (id) {
            axios.put(`/api/departments/${id}`, department)
                .then( res => {
                    this.props.history.push(`/departments/${id}`)
                })//end of axios.put
        }
        else {
            axios.post("/api/departments", department)
                .then( res => {
                    this.props.history.push("/departments")
                })
        };//end of if statement 
    };//end of handleSubmit

    render() {
        const { name } = this.state;
        return (
            <Container>
                <Header>Add New Department</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input 
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={this.handleChange}
                        required
                    />
                    <Form.Button>Submit</Form.Button>
                </Form>
            </Container>
        )//end of return
    };//end of render
};// end of class Form


export default DepartmentForm;
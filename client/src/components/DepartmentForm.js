import React from 'react';
import axios from 'axios';
import { Container, Form, Header } from 'semantic-ui-react';

class DepartmentForm extends React.Component {
    state = { name: "", description: "", image: "" };

    componentDidMount() {
        const { id } = this.props.match.params;
        if (this.props.edit)
            axios.get(`/api/departments/${id}`)
                .then(res => {
                    this.setState({ ...res.data })
                })
    };//end of componentDidMount

    handleChange = (e) => {
        const { target: { name, value } } = e;
        this.setState({ [name]: value });
    };//end of handleChange

    handleSubmit = (e) => {
        e.preventDefault();
        const department = { ...this.state };
        const { id } = this.props.match.params;
        if (this.props.edit) {
            axios.put(`/api/departments/${id}`, department)
                .then( res => {
                    this.props.history.push("/departments/${res.data.id}")
                })//end of axios.put
        }
        else {
            axios.post(`/api/departments`, department)
                .then( res => {
                    this.props.history.push("/departments/${res.data.id}")
                })
        };//end of if statement 
    };//end of handleSubmit

    render() {
        const { name, description, image } = this.state;
        return (
            <Container>
                <Header>Department Form</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input 
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={this.handleChange}
                        required
                    />
                    <Form.Input 
                        name="description"
                        placeholder="Description"
                        value={description}
                        onChange={this.handleChange}
                        required
                    />
                    <Form.Button color="green">Submit</Form.Button>
                </Form>
            </Container>
        )//end of return
    };//end of render
};// end of class Form


export default DepartmentForm;
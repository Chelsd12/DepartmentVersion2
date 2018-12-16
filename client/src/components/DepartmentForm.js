import React from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';

class DepartmentForm extends React.Component {
    state = { name: "", description: "" };

    componentDidMount() {
        if (this.props.edit)
            axios.get(`/api/departments/${this.props.match.params.id}/items`)
                .then(res => {
                    this.setState({ ...res.data })
                })
    };//end of componentDidMount

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };//end of handleChange

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.edit) {
          axios.put(`/api/departments/${this.props.match.params.id}`, { ...this.state })
            .then(res => this.props.history.push(`/departments`))
        } else {
          axios.post(`/api/departments`, { ...this.state })
            .then(res => this.props.history.push(`/departments`))
        }
      };//end of handleSubmit

    render() {
        const { id, name, description } = this.state;
        return (
            <div>
                <h1>{ id ? "Edit Department" : "Add Department"}</h1>
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
            </div>
        )//end of return
    };//end of render
};// end of class Form


export default DepartmentForm;
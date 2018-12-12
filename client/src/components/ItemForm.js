import React from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';

class ItemForm extends React.Component {
    state = { name: "", description: "", price: "" };

    handleChange = (e) => {
        const { target: { name, value } } = e;
        this.setState({ [name]: value });
    };//end of handleChange

    handleSubmit = (e) => {
        e.preventDefault();
        const { id } = this.props.match.params;
        axios.post(`/api/departments/${id}/items`, { ...this.state })
        .then( res => {
                    this.props.history.push(`/departments/${id}`)
                })
    };//end of handleSubmit

    render() {
        const { name, description, price } = this.state;
        return (
            <div>
                <h1>Add Item</h1>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                    name="name"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={this.handleChange}
                    />
                   <Form.Input
                    name="description"
                    placeholder="Description"
                    required
                    value={description}
                    onChange={this.handleChange}
                    />
                    <Form.Input
                    name="price"
                    placeholder="Price"
                    required
                    value={price}
                    onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Button color="green">Sumit</Form.Button>
                </Form>
            </div>
        )//end of return
    };//end of render
};//end of class ItemForm

export default ItemForm;
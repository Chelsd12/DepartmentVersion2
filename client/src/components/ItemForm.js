import React from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';

class ItemForm extends React.Component {
    state = { name: "", description: "", price: "", image: "" };

    componentDidMount() {
        const { id, itemId } = this.props.match.params
        if (itemId)
            axios.get(`/api/departments/${id}/items/${itemId}`)
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
        const { match: { params: { id, itemId } }, history: { push } } = this.props;
        if (itemId) {
            axios.put(`/api/departments/${id}/items/${itemId}`, {...this.state})
                .then (res => push(`/department/${id}`))
        } else 
        axios.post(`/api/departments/${id}/items`, { ...this.state })
        .then( res => {
                    push(`/departments/${id}`)
                })
    };//end of handleSubmit

    render() {
        const { name, description, price, Image, itemId } = this.state;
        return (
            <div>
                <h1>{itemId ? "Edit Item" : "Add Item"}</h1>
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
                    <Form.Input
                    name="image"
                    placeholder="Image"
                    required
                    value={Image}
                    onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Button color="green">Submit</Form.Button>
                </Form>
            </div>
        )//end of return
    };//end of render
};//end of class ItemForm

export default ItemForm;
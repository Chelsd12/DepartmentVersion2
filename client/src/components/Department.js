import React from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Header, Container, Button, Icon, Card } from 'semantic-ui-react';

class Department extends React.Component {
    state = { department: [], items: [] };

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`/api/departments/${id}`)
        .then(res => {
            this.setState({
                department: res.data.name
            })
        })
        this.getItems();
    };

    getItems = () => {
        let {id} = this.props.match.params;
        axios.get(`/api/departments/${id}/items`)
        .then(res => this.setState({items: res.data}))
    };

    renderItems = () => {
        const { id } = this.props.match.params;
        return this.state.items.map( i => (
            <ItemCard key={i.id} { ...i } remove={this.removeItem} />
        ));//end of return
    };//end of renderDepartments

    removeItem = (id) => {
        const remove = window.confirm("Are you sure you want to delete this item?")
        if (remove)
        axios.delete(`api/departments/${this.props.match.params.id}/items/${id}`)
            .then( res => {
                const items = this.state.items.filter( i => {
                    if (i.id !== id)
                        return i;
                })
                this.setState({ items });
            })
    };//end of removeItem

    render() {
        const { department } = this.state;
        const { id } = this.props.match.params;
        return (
            <Container>
                <Title>{ department }</Title>
                <Card.Group itemsPerRow={3}>
                { this.renderItems() }
                </Card.Group>
                <Link to={`/departments/${id}/items/new`}>
                <Button icon color="green">
                    <Icon name="add" />
                        Add Item
                </Button>
                </Link>
            </Container>
        )//end of return
    };//end of render   
};//end of class Department 

const Title = styled.h1`
  font-size: 2em !important;
  text-align: left !important;
`;

export default Department;
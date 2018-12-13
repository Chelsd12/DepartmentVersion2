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

    removeItem = (id) => {
        const remove = window.confirm("Are you sure you want to delete this item?");
        const dId = this.props.match.params.id;
        if (remove)
          axios.delete(`/api/departments/${dId}/items/${id}`)
            .then( res => {
              const items = this.state.items.filter( i => {
                if (i.id !== id)
                  return i;
              })
              this.setState({ items, });
            })
      };//end of removeItem

    renderItems = () => {
        const { id } = this.props.match.params;
        return this.state.items.map( p => (
            <Card>
            <Card.Content>
              <Card.Header>{p.name}</Card.Header>
              <br />
              <Card.Content extra>${p.price}</Card.Content>
              <br />
              <Card.Description>{p.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button inverted color="blue">
                  Edit
                </Button>
                <Button inverted color="red" onClick={() => this.removeItem(p.id)}>
                  Delete
                </Button>
              </div>
            </Card.Content>
          </Card>        
          ));//end of return
    };//end of renderDepartments

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
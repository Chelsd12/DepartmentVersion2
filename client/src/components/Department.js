import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ItemCard from "./ItemCard";
import { Button, Icon, Card, Image } from 'semantic-ui-react';

class Department extends React.Component {
    state = { department: {}, items: [] };

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`/api/departments/${id}`)
            .then(res => {
                this.setState({
                    department: res.data.name
            })
        })
        this.getItems();
    };//end of componentDidMount

    getItems = () => {
        let {id} = this.props.match.params;
        axios.get(`/api/departments/${id}/items`)
            .then(res => this.setState({items: res.data}))
    };//end of getItems

    renderItems = () => {
      return this.state.items.map( i => (
        <ItemCard key={i.id} { ...i } remove={this.removeItem} />
      ))
    };//end of renderItems

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

  render() {
    const { department: { id, name, description, } } = this.state;
    return (
      <div>
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
          <h1>{ name }</h1> 
        </div>
        <br />
        <h4>{ description }</h4>
        <br />
        <br />
        <Link to={`/departments/${id}/items/new`}>
          <Button icon color="green">
            <Icon name="add" />
            Add Item
          </Button>
        </Link>
        <br />
        <br />
        <Card.Group itemsPerRow={4}>
          { this.renderItems() }
        </Card.Group>
      </div>
    )//end of return
  };//end of render
};//end of class Department

export default Department;
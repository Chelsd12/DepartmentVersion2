import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Image, Grid } from 'semantic-ui-react';

class Item extends React.Component {
    state = { item: {}, reviews: [] };

    componentDidMount() {
        const { url } = this.props.match;
        axios.get(`/api/${url}`)
            .then(res =>{
                this.setState({ item: res.data })
            })
    };//end of componentDidMount

    render() {
        const { name, description, price, image } = this.state.item;
        return (
            <Grid columns={2}>
            <Grid.Row>
            <Grid.Column>
            <Card>
                <Card.Content>
                    <Card.Image>{image}</Card.Image>
                    <br />
                    <Card.Header>{name}</Card.Header>
                    <br />
                    <Card.Content extra>${price}</Card.Content>
                    <br />
                    <Card.Description>{description}</Card.Description>
                </Card.Content>
            </Card>
            </Grid.Column>
            <Grid.Column>
                <div>
                    Reviews
                </div>
            </Grid.Column>
            </Grid.Row>
            </Grid>
        )//end of return
    };//end of render
};//end of class Item

export default Item;
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Button } from 'semantic-ui-react';

const ItemCard = ({ id, name, description, price, image, remove, department_id }) => (
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <br />
      <Card.Content extra>${price}</Card.Content>
      <br />
      <Card.Description>{description}</Card.Description>
      <br />
      <Card.Image>{image}</Card.Image>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Link to={`/departments/${department_id}/items/${id}`}>
        <Button inverted color="orange">
          View
        </Button>
        </Link>
        <Link to={`/departments/${department_id}/items/${id}/edit`}>
        <Button inverted color="blue">
          Edit
        </Button>
        </Link>
        <Button inverted color="red" onClick={() => remove(id)}>
          Delete
        </Button>
      </div>
    </Card.Content>
  </Card>
);//end of const ItemCard

export default ItemCard;
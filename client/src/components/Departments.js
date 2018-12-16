import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button, Icon, Image } from 'semantic-ui-react';

class Departments extends React.Component {
    state = { departments: [] };

    componentDidMount() {
        axios.get("/api/departments")
            .then( res => {
                this.setState({ departments: res.data });
            })
    };//end of componentDidMount

    handleDelete = (id) => {
        const remove = window.confirm("Are you sure you want to delete this department?")
        if (remove)
        axios.delete(`/api/departments/${id}`)
          .then( res => this.props.history.push("/departments"))
    };//end of handleDelete

    renderDepartments = () => {
        return this.state.departments.map( d => (
        <Card>
            <Card.Content textAlign="center">
                <Card.Header>
                        { d.name }
                </Card.Header>
                <Card.Description>
                        { d.description }
                </Card.Description>
                <Image src="https://picsum.photos/300?random" alt=""/>
            </Card.Content>
            <Card.Content textAlign="center">
                <Link to={`/departments/${d.id}/items`}>
                    <Button color="orange">
                        View
                    </Button>
                </Link>
                <Link to={`/departments/${d.id}/edit`}>
                    <Button icon color="blue">
                        <Icon name="pencil" />
                            Edit
                    </Button>
                </Link>
                <Button icon color="red" onClick={() => this.handleDelete(d.id)}>
                    <Icon name="trash" />
                        Delete
                </Button>
            </Card.Content>
        </Card>
        ));//end of return
    };//end of renderDepartments
    
    render() {
        return (
        <div>
            <Link to="/departments/new">
                <Button icon color="green">
                    <Icon name="add" />
                        New Department
                </Button>
            </Link>
            <br />
            <br />
            <br />
            <Card.Group itemsPerRow={3}>
            { this.renderDepartments() }
            </Card.Group>
        </div>
        )//end of return
    };//end of render
};//end of class Departments

// const Title = styled.h1`
//   font-size: 1.5em !important;
//   text-align: center !important;
// `;

export default Departments;
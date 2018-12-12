import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

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
                <Link to={`/departments/${id}/items/${i.id}`} >
                <li>{ i.name }</li>
                </Link>  
        ));//end of return
    };//end of renderDepartments
    
    handleDelete = () => {
        const { id } = this.props.match.params;
        axios.delete(`/api/departments/${id}`)
          .then( res => {
            this.props.history.push("/departments");
          })
      };//end of handleDelete

    render() {
        const { department } = this.state;
        const { id } = this.props.match.params;
        return (
            <div>
                <br />
                <Header>{ department }</Header>
                <ul>
                { this.renderItems() }
                </ul>
                <Link to={`/departments/${id}/edit`}>
                <button>Edit</button>
                </Link>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )//end of return
    };//end of render
};//end of class Department 

export default Department;
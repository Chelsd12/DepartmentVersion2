import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Department extends React.Component {
    state = { department: {} };

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`/api/departments/${id}`)
            .then( res => {
                this.setState({ department: res.data });
            })//end of axios.get
    };//end of componentDidMount

    handleDelete = () => {
        const { id } = this.props.match.params;
        axios.delete(`/api/departments/${id}`)
          .then( res => {
            this.props.history.push("/departments");
          })
      };//end of handleDelete

    render() {
        const { id, name } = this.state.department;
        
        return (
            <div>
                <h1>{ name }</h1>
                <br />
                <Link to={`/departments/${id}/edit`}>
                <button>Edit</button>
                </Link>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )//end of return
    };//end of render
};//end of class Department 

export default Department;
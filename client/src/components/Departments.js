import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Departments extends React.Component {
    state = { departments: [] };

    componentDidMount() {
        axios.get("/api/departments")
            .then( res => {
                this.setState({ departments: res.data });
            })
    };//end of componentDidMount

    renderDepartments = () => {
        return this.state.departments.map( d => (
            <Link to={`/departments/${d.id}`}>
                <li>{ d.name }</li>
            </Link>
        ));//end of return
    };//end of renderDepartments

    render() {
        return (
            <div>
                <br />
                <Link to="/departments/new">
                <button>New Department</button>
                </Link>
                <ul>
                { this.renderDepartments() }
                </ul>
            </div>
        )//end of return
    };//end of render
};//end of class Departments

export default Departments;
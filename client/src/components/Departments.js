import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from "styled-components";

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
            <Link to={`/departments/${d.id}/items`} key={d.id}>
                <li>{ d.name }</li>
            </Link>
        ));//end of return
    };//end of renderDepartments

    render() {
        return (
            <div>
                <br />
                <ButtonLink>
                <Link to="/departments/new">
                <button>New Department</button>
                </Link>
                </ButtonLink>
                <br />
                <br />
                <br />
                <ul>   
                { this.renderDepartments() }
                </ul>
            </div>
        )//end of return
    };//end of render
};//end of class Departments

const ButtonLink = styled.a`
  float: left;
  padding: 10px 30px;
  border-radius: 10px;
`;

export default Departments;
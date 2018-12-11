import React from 'react';
import axios from 'axios';

class DepartmentForm extends React.Component {
    state = { name: "" };

    componentDidMount() {
        const { id } = this.props.match.params;
        if (id)
        axios.get(`/api/departments/${id}`)
            .then( res => {
                const { name } = res.data;
                this.setState({ name });
            })//end of axios.get
    };//end of componentDidMount

    handleChange = (e) => {
        const { target: { name, value } } = e;
        this.setState({ [name]: value });
    };//end of handleChange

    handleSubmit = (e) => {
        e.preventDefault();
        const department = { ...this.state };
        const { id } = this.props.match.params;
        if (id) {
            axios.put(`/api/departments/${id}`, department)
                .then( res => {
                    this.props.history.push(`/departments/${id}`)
                })//end of axios.put
        }
        else {
            axios.post("/api/departments", department)
                .then( res => {
                    this.props.history.push("/departments")
                })
        };//end of if statement 
    };//end of handleSubmit

    render() {
        const { name } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={this.handleChange}
                    required
                />
                <button>Submit</button>
            </form>
        )//end of return
    };//end of render
};// end of class Form

export default DepartmentForm;
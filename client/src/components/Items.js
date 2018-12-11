import React from 'react';
import axios from 'axios';

class Items extends React.Component {
    state = { items: [] };

    componentDidMount() {
        axios.get(`/api/departments/${this.props.departmentId}/items`)
            .then( res => {
                this.setState({ items: res.data });
            })
    };//end of componentDidMount

    render() {
        return (
            <ul>
                {this.state.items.map( item =>
                    <li key={item.id}>
                        {item.name},
                        {item.description},
                        {item.price}
                    </li>
                    )
                }
            </ul>
        )//end of return
    };//end of render
};//end of class Items

export default Items;
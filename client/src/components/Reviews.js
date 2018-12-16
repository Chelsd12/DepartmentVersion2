import React from "react";
import axios from "axios";
import ReviewForm from "./ReviewForm";
import { Segment, Button, Icon, Card, Rating, } from "semantic-ui-react";

class Reviews extends React.Component {
  state = { reviews: [], showForm: false, };

  componentDidMount() {
    axios.get(`/api/items/${this.props.itemId}/reviews`)
      .then(res => this.setState({ reviews: res.data, }))
  };//end of componentDidMount

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });

  addReview = (review) => {
    this.setState({ reviews: [review, ...this.state.reviews], });
  };//end of addReview

  removeReview = (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm)
      axios.delete(`/api/items/${this.props.itemId}/reviews/${id}`)
        .then( res => {
          const reviews = this.state.reviews.filter( r => {
            if (r.id !== id)
              return r;
          })
          this.setState({ reviews, });
        })
  };//end of removeReview

  renderReviews = () => {
    return this.state.reviews.map( r => (
      <Card fluid>
        <Card.Content>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Rating
              rating={r.rating}
              defaultRating={5}
              maxRating={5}
              disabled
              icon="star"
              size="massive"
            />
            <div>
              <Button icon color="blue">
                <Icon name="pencil" />
              </Button>
              <Button icon color="red" onClick={() => this.removeReview(r.id)}>
                <Icon name="trash" />
              </Button>
            </div>
          </div>
          <br />
          <br />
          <Card.Header>{ r.title }</Card.Header>
          <Card.Meta>{ r.author }</Card.Meta>
          <Card.Description>
            { r.body }
          </Card.Description>
        </Card.Content>
      </Card>
    ))
  };//end of renderReviews

  renderForm = () => {
    const { showForm, } = this.state;
    if (showForm) 
      return (
        <ReviewForm 
          itemId={this.props.itemId} 
          add={this.addReview} 
          toggle={this.toggleForm} 
        />
      )
    return null;
  };//end of renderForm

  render() {
    return (
      <Segment>
        <div>
          <h1 style={{ textAlign: "center" }}>Reviews</h1>
          <Button icon color="purple" onClick={this.toggleForm}>
            <Icon name='chess queen' />
            Add Review
          </Button>
        </div>
        { this.renderForm() }
        <hr />
        { this.renderReviews() }
      </Segment>
    )//end of return
  };//end of render
};//end of class Reviews

export default Reviews;
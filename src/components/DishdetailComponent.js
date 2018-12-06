import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //dish: null
            // comments: this.props.selectedDish.comments
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(dish) {
        if (dish != null) {
            var comments = dish.comments
            return (
                <div>
                    <h4>Comments</h4>
                    <ul class="list-unstyled">
                        <li>{comments[0].comment}</li>
                        <br></br>
                        <li>-- {comments[0].author}</li>
                        <br></br>
                        <li>{comments[1].comment}</li>
                        <br></br>
                        <li>-- {comments[1].author}</li>
                        <br></br>
                        <li>{comments[2].comment}</li>
                        <br></br>
                        <li>-- {comments[2].author}</li>
                        <br></br>
                        <li>{comments[3].comment}</li>
                        <br></br>
                        <li>-- {comments[3].author}</li>
                        <br></br>
                        <li>{comments[4].comment}</li>
                        <br></br>
                        <li>-- {comments[4].author}</li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>
        );
    }
}

export default Dishdetail;

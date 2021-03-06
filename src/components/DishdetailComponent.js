import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

function RenderComments({comments}) {
        if (comments != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )
        else
             return (
                  <div></div>
             );
    }

const Dishdetail = (props) => {
        if (props.dish != null)
            return (
                <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

export default Dishdetail;

    // renderDish(dish) {
    //     return (
    //         <div className="col-12 col-md-5 m-1">
    //             <Card>
    //                 <CardImg top src={dish.image} alt={dish.name} />
    //                 <CardBody>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                     <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         </div>
    //     )
    // }

    // renderComments(comments) {
    //     if (comments != null)
    //         return (
    //             <div className="col-12 col-md-5 m-1">
    //                 <h4>Comments</h4>
    //                 <ul className="list-unstyled">
    //                     {comments.map((comment) => {
    //                         return (
    //                             <li key={comment.id}>
    //                             <p>{comment.comment}</p>
    //                             <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
    //                             </li>
    //                         );
    //                     })}
    //                 </ul>
    //             </div>
    //         )
            // const listItems = comments.map((item) =>
            //     <li key={item.id}>
            //         {item.comment}
            //         <br></br><br></br>
            //         {'-- ' + item.author + ','}
            //         {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}
            //         <br></br><br></br>
            //     </li>
            // )
            // return (
            //     <div>
            //         <h4>Comments</h4>
            //         <ul class="list-unstyled">
            //             {listItems}
            //         </ul>
            //     </div>
            // )
        //  else
        //     return (
        //         <div></div>
        //     );
        // }

    // render() {
    //     if (this.props.dish != null)
    //         return (
    //             <div className="container">
    //             <div className="row">
    //                 {this.renderDish(this.props.dish)}
    //                 {this.renderComments(this.props.dish.comments)}
    //             </div>
    //             </div>
    //         );
    //     else
    //         return (
    //             <div></div>
    //         );
    // }

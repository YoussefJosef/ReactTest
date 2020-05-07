import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions';

class ReduxPost extends  PureComponent {

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/reduxHome')
    }

    render(){
        console.log(this.props);
        const  post  = this.props.post ? (
            <div className="post">
                <span className="card-title">{this.props.post.title}</span>
                <span className="">{this.props.post.body}</span>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>DELETE_POST</button>
                </div>
            </div>
        ) : (
            <div className = 'center'>Loading post ...</div>
        )
    
        return(
            <div className="container">
                <h4>Route param : {this.props.id} </h4>
               <div className="container">{post}</div>
            </div>
        )
    }  
}
const mapStateToProps = (state,ownProps) => {
    let id = ownProps.match.params.post_id

    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { 
            dispatch(deletePost(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ReduxPost);
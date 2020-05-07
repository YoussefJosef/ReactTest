import React, { PureComponent } from 'react'
import Axios from 'axios';

export default class AxiosPost extends  PureComponent {
    state = {
        post: null
    }
    componentDidMount(){
        console.log(this.props);
        let id = this.props.match.params.post_id
        Axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
        .then(res => {
            this.setState({
            post: res.data
            });
        })
        
    }
    render(){
        const  post  = this.state.post ? (
            <div className="post">
                <span className="card-title">{this.state.post.title}</span>
                <span className="">{this.state.post.body}</span>
            </div>
        ) : (
            <div className = 'center'>Loading post ...</div>
        )
    
        return(
            <div className="container">
                <h4>Route param : {this.state.id} </h4>
               <div className="container">{post}</div>
            </div>
        )
    }  
}
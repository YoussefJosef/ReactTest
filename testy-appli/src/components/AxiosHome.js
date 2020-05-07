import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png'

export default class AxiosHome extends Component {

    state = {
        posts: []
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                this.setState({
                posts: res.data.slice(0, 10)
                });
            })
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}  >
                        <img src={Pokeball} alt="pokeball" />
                        <div className="card-content">
                            <Link to={'/axios/' + post.id}>
                            <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <span className="">{post.body}</span>
                        </div>
                    </div>
                )
            })) : (
                <div className="center">no posts yet !</div>
            );
        return (
            <div className="container home">
                <h4 className="center">AxiosHome</h4>
                <div className="center span"></div>
                <span>{postList}</span>
            </div>
        )
    }
};
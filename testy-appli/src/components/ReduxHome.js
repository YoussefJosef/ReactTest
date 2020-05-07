import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';
class ReduxHome extends Component {

    render() {
        console.log(this.props);
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}  >
                        <img src={Pokeball} alt="pokeball" />
                        <div className="card-content">
                            <Link to={'/redux/' + post.id}>
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
                <h4 className="center">ReduxHome</h4>
                <div className="center span"></div>
                <span>{postList}</span>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps) (ReduxHome);
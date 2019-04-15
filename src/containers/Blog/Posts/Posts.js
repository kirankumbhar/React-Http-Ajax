import React, {Component} from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
class posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
            });
    }

    postSelector= (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post clicked = {() => this.postSelector(post.id)} key = {post.id} title = {post.title} author = {post.author}/>
        });
        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default posts;
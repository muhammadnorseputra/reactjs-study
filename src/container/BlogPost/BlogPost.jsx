import React, { Component, Fragment } from 'react'
import Post from '../../component/Post/Post'
import axios from 'axios'

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    // fetch("http://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       posts: json
    //     })
    //   });
    axios.get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          posts: response.data
        })
      });
  }

  render() {
    return (
      <Fragment>
        {
          this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} body={post.body} />;
          })
        }
        
      </Fragment>
    );
  }
}

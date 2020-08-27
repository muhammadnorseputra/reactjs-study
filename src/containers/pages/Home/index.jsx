import React, { Component, Fragment, Suspense } from 'react'
import axios from 'axios'
import { Loader_content as Loading } from "../../../components/atoms/Loader";
const Post = React.lazy(() => import('../../../components/molecules/Posts'));

const ApiKey = "f6eb574228534232b71febf5ccdb441b";
const Contry = "id";

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    axios.get(
      `https://newsapi.org/v2/top-headlines?country=${Contry}&apiKey=${ApiKey}`
    ).then(res => {
      this.setState({
        posts: res.data.articles,
      });
    });
  }

  render() {
    const article = this.state.posts;
    return (
      <Fragment>
        <header className="p-3 border-b border-gray sticky top-0 z-0 bg-white font-ms font-bold text-xl">
          Home
        </header>
        <Suspense fallback={<Loading />}>
          {article.map((post, index) => (
            <Post
              key={index}
              TglPublish={post.publishedAt}
              Sumber={post.source.name}
              SumberId={post.source.id}
              ImgUrl={post.urlToImage}
              Title={post.title}
              Description={post.description}
            />
          ))}
        </Suspense>
      </Fragment>
    );
  }
}

import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Loader_content as Loading } from "../../../components/atoms/Loader";
import Post from '../../../components/molecules/Posts';
import { LoseConnection } from '../../../components/atoms/Error/LoseConnection'
import { GlobalConsumer } from '../../../config/Context' 

const ApiKey = "f6eb574228534232b71febf5ccdb441b";
const Contry = "id";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      posts: []
    }
  }
  componentDidMount() {
    return new Promise ((resolve, reject)  => { 
      axios.get(`https://newsapi.org/v2/top-headlines?country=${Contry}&apiKey=${ApiKey}`)
      .then(res => {
        this.setState({
          posts: res.data.articles,
          isLoading: false,
        });
        this.props.dispatch({type: 'ONLINE'});
      }).catch(reject => {
        this.setState({
          isLoading: false,
        })
        this.props.dispatch({type: 'OFFLINE'});
      })
    }) 
        
  }

  render() {
    const article = this.state.posts;
    const loading = this.state.isLoading;
    return (
      <Fragment>
        <header className="p-3 bg-gray-100 font-bold text-xl">
          Home 
        </header>
          
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

          { !loading && !this.props.state.connection
            ? 
            <LoseConnection />
            : 
            <Loading isLoading={loading} />
          }
          
      </Fragment>
    );
  }
}


export default GlobalConsumer(Home);
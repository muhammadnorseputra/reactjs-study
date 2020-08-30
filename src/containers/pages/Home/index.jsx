import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Loader_content as Loading } from "../../../components/atoms/Loader";
import Post from '../../../components/molecules/Posts';
import { LoseConnection } from '../../../components/atoms/Error/LoseConnection'
import { GlobalConsumer } from '../../../config/Context' 

import Tippy from '@tippyjs/react';
import {animateFill} from 'tippy.js';

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
        <div className="flex flex-row justify-center gap-6">
          <div class="w-16 h-16 relative my-4">
            <Tippy interactive={false} animateFill={true} plugins={animateFill} animation="shift-away" content="Putra" arrow={false}>
            <div class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
              <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
            </div>
            </Tippy>
          </div>
          <div class="w-16 h-16 relative my-4">
            <Tippy interactive={false} animateFill={true} plugins={animateFill} animation="shift-away" content="Putra" arrow={false}>
            <div class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
              <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
            </div>
            </Tippy>
          </div>          <div class="w-16 h-16 relative my-4">
            <Tippy interactive={false} animateFill={true} plugins={animateFill} animation="shift-away" content="Putra" arrow={false}>
            <div class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
              <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
            </div>
            </Tippy>
          </div>          <div class="w-16 h-16 relative my-4">
            <Tippy interactive={false} animateFill={true} plugins={animateFill} animation="shift-away" content="Putra" arrow={false}>
            <div class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
              <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
            </div>
            </Tippy>
          </div>
        </div>
        <header className="p-3 bg-white rounded-t-lg font-bold text-xl shadow">
          New Post 
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
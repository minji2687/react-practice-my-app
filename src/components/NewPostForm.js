import React, { Component } from 'react'
import api from '../api';
import PostForm from './PostForm'

export default class NewPostForm extends Component {

 async handleSubmit(title, body){

   const res = await api.post('/posts',{
     title,
     body
   })
   this.props.onPostDetailPage(res.data.id)
   //TODO:생성된 게시물 보여주기
 }

  render() {
    return (
      <PostForm onSubmit={(title,body) =>this.handleSubmit(title,body)} />
    )
  }
}

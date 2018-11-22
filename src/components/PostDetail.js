import React, { Component } from 'react'
import api from '../api';
import Layout from "./Layout";
import{UserConsumer} from "../Context/UserContext"

export default class PostDetail extends Component {
    constructor(props) {
    super(props)

    this.state = {
        body:'',
        title:'',
        userId: null
    }
}

async componentDidMount(){
    const {data:{title, body, userId}} = await api.get(`/posts/${this.props.postId}`)
    this.setState({
        title,
        body,
        userId:null
    })
}

  render() {
      const { postId, onEditPostFormPage} = this.props
      const {title,body } = this.state
    return (
      <Layout title="게시물 내용">
        <h1>게시물</h1>
        <UserConsumer>
            {({id})=>{
                    if(this.state.userId===id){
                        return <button onClick={ () => onEditPostFormPage(postId)}>수정</button>
                    }
                }}
        </UserConsumer>
            <button onClick={() => onEditPostFormPage(postId)}>수정</button>
        <div>{title}</div>
        <div>{body}</div>
      </Layout>
    )
  }
}

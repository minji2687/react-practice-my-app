import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import PostList from "./components/PostList";
import PostDetail from './components/PostDetail'


//로그인홈에 회원가입 버튼 만들기
//회원가입 버튼 킅릭하면 회원가입 폼 보여주기
class App extends Component {
  constructor(props){
    super(props)
    //page ==='register'--> 회원가입 페이지
    //page === 'past-list' ->게시물 목록 페이지
    this.state={
      page:'post-list',
      //현제 보고있는 게시물의 Id s
      postId:null
    }
  }

  handleRegisterPage(){
   this.setState({ page: "register" }); 
  }

  handlePostDetilPage(postId){
    this.setState({
      page:"post-detail",
      postId
    })
  }

  render() {
    return (
      <div className="App">
       {this.state.page === 'login'?(
          <LoginForm onRegister={() => this.handleRegisterPage()}/>
       ) :this.state.page ==='register' ?(
         <RegisterForm/>
       ):this.state.page ==='post-list' ?(
         <PostList onPostDetailPage={ postId => this.handlePostDetilPage(postId)}/>
       ):this.state.page ==='post-detail'?(
         <PostDetail postId={this.state.postId}/>
       ):null}
      </div>
    );
  }
}

export default App;

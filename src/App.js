import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import PostList from './components/PostList'


//로그인홈에 회원가입 버튼 만들기
//회원가입 버튼 킅릭하면 회원가입 폼 보여주기
class App extends Component {
  constructor(props){
    super(props)
    //page ==='register'--> 회원가입 페이지
    //page === 'past-list' ->게시물 목록 페이지
    this.state={
      page:'PostList'
    }
  }

  handleRegisterPage(){
   this.setState({ page: "register" }); 
  }

  render() {
    return (
      <div className="App">
       {this.state.page === 'login'?(
          <LoginForm onRegister={() => this.handleRegisterPage()}/>
       ) :this.state.page ==='register' ?(
         <RegisterForm/>
       ):this.state.page ==='PostList' ?(
         <PostList/>
       ):null}
      </div>
    );
  }
}

export default App;

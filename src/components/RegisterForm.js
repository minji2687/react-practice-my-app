import React, { Component } from 'react'
import api from '../api'

export default class RegisterForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          //현재 입력 필드에 입력된 사용자 이름/암호
         username:'',
         password:''
      }
    }
    
    async handleSubmit(e){
        e.preventDefault()
      const {username , password} = this.state
         //중복체크
        const {data:users} = await api.get('/users',{
            prams:{
                username
            }
        })
        if(users.length >0){
            alert("이미 같은 이름이 사용중입니다")
            return
        }

        const res = await api.post('/users/register',{
            username,
            password
        })

        localStorage.setItem('token',res.data.token)

    }
  
    handleFieldChange(e,name){
        this.setState({
            [name]:e.target.value
        })
    }
      render() {
      const {username,password} = this.state
    return <form onSubmit={e => this.handleSubmit(e)}>
        <h1>회원가입</h1>
        <input type="text" name="username" value={username} onChange={e => this.handleFieldChange(e)} />
        <input type="password" name="password" value={password} onChange={e => this.handleFieldChange(e)} />
        <button>가입</button>
      </form>;
  }
}
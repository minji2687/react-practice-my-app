import React from 'react'
import RegisterForm from './RegisterForm';
import {UserConsumer} from '../Context/UserContext'

export default class LoginForm extends React.Component{

    constructor(props) {
      super(props)
        this.usernameRef=React.createRef()
        this.passwordRef=React.createRef()
    }
    

  

    render(){

        const {onRegister} = this.props
        return (
            <UserConsumer>

            {({login})=>(
        <React.Fragment>
            <form onSubmit={e => 
                {
                    e.preventDefault()
                    const username=e.target.elements.username.value
                    const password = e.target.elements.username.value
                    login(username,password)
                }}>
              <h1>로그인</h1>

              <input ref={this.usernameRef} type="text" name="username" />
              <input ref={this.passwordRef} type="password" name="password" />
              <button>로그인</button>
            </form>
            <button onClick={() => onRegister()}>회원가입</button>

          </React.Fragment>
          )}
        </UserConsumer>
        )
    }

}
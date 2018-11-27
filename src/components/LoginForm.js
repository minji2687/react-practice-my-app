import React from 'react'
import {UserConsumer, widthUser} from '../contexts/UserContext'
import {Form} from 'semantic-ui-react'
class LoginForm extends React.Component{

  static defaultProps={
    //사용자가 로그인 폼을 전송했을 떄 호출되는 함수
    //usrname과 password를 인수를 받음
    login:(username, password)=>{},
    onRegister:()=>{}
  }

    constructor(props) {
      super(props)

        this.usernameRef=React.createRef()
        this.passwordRef=React.createRef()
    }
    

  handleSubmit(e){
      e.preventDefault()
      const username = e.target.elements.username.value
      const password = e.target.elements.username.value
      this.props.login(username, password)
  }

    render(){
        const {onRegister} = this.props
        return (
          
        <React.Fragment>
            <Form onSubmit={e =>{this.handleSubmit(e)}}>
            
              <h1>로그인</h1>
              <Form.Input label="사용자이름" type="text" name="username" />
              <Form.Input label="비밀번호" type="password" name="password" />
              <Form.Button>로그인</Form.Button>
            </Form>
            <button onClick={() => onRegister()}>회원가입</button>

          </React.Fragment>
       
        )
    }

}
export default widthUser(LoginForm)
import React, { Component } from 'react'
import api from '../api'

const { Provider, Consumer } = React.createContext()

export default class UserProvider extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id:null,
         username:null
      }
    }
    

    async login(username,password) {
        const res = await api.post('/users/login', {
            username,
            password
        })
        localStorage.setItem('token', res.data.token)
        const res2 = await api.get('./me')
        
        this.setState({
            id:res.data.id,
            username:res2.data.username
        })
    }
    render() {
        const value ={
            username: 'fast',
            login:this.login.bind(this)
        }
        return (
            <div>
                <Provider value={value}>{this.props.children}</Provider>
            </div>
        )
    }
}


export {
    UserProvider,
    Consumer as UserConsumer
}

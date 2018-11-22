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
    
    async conponentDidMount(){
        if(localStorage.getItem('token')){
            await this.refreshUser()
        }
    }

    async login(username, password) {
        const res = await api.post('/users/login', {
            username,
            password
        })
        localStorage.setItem('token', res.data.token)
        await this.refreshUser()
    }

    async refreshUser(){
        const res2 = await api.get('/me')
        this.setState({
            id: res.data.id,
            username: res2.data.username
        })
    }

 

    render() {
        const value ={
            username: this.state.username,
            id:this.state.id,
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

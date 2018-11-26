import React, { Component } from 'react'
import api from '../api'

const { Provider, Consumer } = React.createContext({
    username:'fast',
    id:0,
    login:()=>{},
    logout:()=>{}

})


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

        this.props.onPostListPage();
    }


    logout(){
        
        localStorage.removeItem('token')
        this.setState({
            id:null,
            username:null
        })
        
    }

    async refreshUser(){
        const res2 = await api.get('/me')
        this.setState({
            id: res2.data.id,
            username: res2.data.username
        })
    }

 

    render() {
        const value ={
            username: this.state.username,
            id:this.state.id,
            login:this.login.bind(this),
            logout:this.logout.bind(this)
        }
        return (
            <div>
                <Provider value={value}>{this.props.children}</Provider>
            </div>
        )
    }
}
function withSubscription(WrappedComponent) {
    class WithSubscription extends React.Component {/* ... */ }
    WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
    return WithSubscription;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function widthUser(WrappedComponent){
     function widthUser(props){
        return (
            <Consumer>
                {value => <WrappedComponent {...value} {...props} />}
            </Consumer>
        )
    }
    widthUser.displayName = 'widthUser(!!!)'
    return widthUser
}

export {
    UserProvider,
    Consumer as UserConsumer,
    widthUser
}

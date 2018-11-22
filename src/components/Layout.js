import React, { Component } from 'react'
import { UserConsumer } from '../Context/UserContext';

export default class Layout extends Component {
  render() {
    return (
      <div>
          <div className="header">헤더</div>
          <UserConsumer>
                {({ username, logout }) => <React.Fragment><div>{username}</div><button onClick={logout}>로그아웃</button></React.Fragment>}
          </UserConsumer>
          <div>{this.props.title}</div>
          {this.props.child}
          <div className="footer">푸터</div>
      </div>
    )
  }
}

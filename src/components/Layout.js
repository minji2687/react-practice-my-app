import React, { Component } from 'react'
import { UserConsumer } from '../Context/UserContext';

export default class Layout extends Component {
  render() {
    return (
      <div>
          <div className="header">헤더</div>
          <UserConsumer>
              {({username})=><div>{username}</div>}
          </UserConsumer>
          <div>{this.props.title}</div>
          {this.props.child}
          <div className="footer">푸터</div>
      </div>
    )
  }
}

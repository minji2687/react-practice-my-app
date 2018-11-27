import React, { Component } from 'react'
import s from './PostForm.module.scss'
import classNames from 'classnames'

export default class PostForm extends Component {

    static defaultProps={
            //true 가 주어지면, 편집모드 스타일이 적용됨
            editing: false
        
    }
    render() {
        const {editing}=this.props
        const titleClass= classNames(s.titleInput,{
            [s.editing]:editing
        })
        return (
            <div>
                <form onSubmit={e =>this.props.onSubmit(e)}>
                    <input className={titleClass} type="text" name="title" defaultValue={this.props.title}/>
                    <textarea name="body" cols="30" rows="10" defaultValue={this.props.body}></textarea>
                    <button>전송</button>
                </form>
            </div>
        )
    }
}


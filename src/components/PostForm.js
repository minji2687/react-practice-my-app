import React, { Component } from 'react'
import s from './PostForm.module.scss'
import classNames from 'classnames'

export default class PostForm extends Component {

    static defaultProps={
            //true 가 주어지면, 편집모드 스타일이 적용됨
            editing: false,
            //폼 전송시 호출되는 함수, 이벤트 객체를 인수로 받음
            onSubmit:()=>{}
    }
    render() {
        const {editing}=this.props
        const titleClass= classNames(s.titleInput,{
            [s.editing]:editing
        })
        return (
            <div>
                <form onSubmit={e =>{
                    e.preventDefault()
                    const title = e.target.elements.title.value
                    const body = e.target.elements.body.value
                    this.props.onSubmit(title,body)
                     }}>
                    <input className={titleClass} type="text" name="title" defaultValue={this.props.title}/>
                    <textarea name="body" cols="30" rows="10" defaultValue={this.props.body}></textarea>
                    <button>전송</button>
                </form>
            </div>
        )
    }
}


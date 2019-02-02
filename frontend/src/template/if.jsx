import React, { Component } from 'react'

export default class If extends Component {
    render() {
        if(this.props.test) {
            return <div>{ this.props.children }</div>
        } else {
            return false
        }
    }
}
import React, { Component } from 'react'

export default class Dropdown extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tipe: props.tipe
        }
    }
    handleClick = () => {
        this.setState({
            tipe: !this.state.tipe
        })
        this.props.setDay(!this.state.tipe)
    }

    render() {
        return (
            <div className='text-right pb-4'>
                <span className='text-text-color-900 text-xs font-light' onClick={this.handleClick}>{this.state.tipe ? 'Day' : 'Week'}</span>
            </div>
        )
    }
}

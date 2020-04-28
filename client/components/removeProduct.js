import React, {Component} from 'react'
import RemoveProductForm from './removeProductForm'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'

class removeProduct extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      name: this.props.match.params.name,
      description: this.props.match.params.description,
      redirect: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    Axios.delete(`/api/products/${this.props.match.params.id}`, {})
    this.setState({
      id: this.state.id,
      name: `Style ${this.state.id} have been deleted`,
      description: '',
      redirect: '/products'
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <div>
        <RemoveProductForm
          state={this.state}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default removeProduct

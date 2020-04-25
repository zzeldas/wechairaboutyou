import React, {Component} from 'react'
import RemoveProductForm from './removeProductForm'
import Axios from 'axios'

class updateProduct extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      name: this.props.match.params.name,
      description: this.props.match.params.description
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    Axios.delete(`/api/products/${this.props.match.params.id}`, {})
    this.setState({
      id: this.state.id,
      name: `Style ${this.state.id} have been deleted`,
      description: ''
    })
    console.log('record deleted')
    //this.props.history.go(-2)
  }

  render() {
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

export default updateProduct

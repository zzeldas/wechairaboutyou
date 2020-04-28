import React, {Component} from 'react'
import ProductForm from './ProductForm'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'

class newProduct extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      imageUrl: '',
      price: 0,
      quantity: 1,
      categories: [],
      isActive: false,
      redirect: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    evt.preventDefault()
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    let isActForm

    if (this.state.isActive === 'true') {
      isActForm = true
    } else {
      isActForm = false
    }

    Axios.post('/api/products', {
      name: this.state.name,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
      price: this.state.price,
      quantity: this.state.quantity,
      categories: this.state.categories,
      isActive: isActForm
    })

    this.setState({
      name: '',
      description: '',
      imageUrl: '',
      price: 0,
      quantity: 0,
      categories: [],
      isActive: false,
      redirect: '/products'
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div>
        <h2 className="update-product-title">New Product</h2>
        <ProductForm
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default newProduct

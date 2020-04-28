import React, {Component} from 'react'
import ProductForm from './ProductForm'
import Axios from 'axios'

class updateProduct extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      name: this.props.match.params.name,
      description: this.props.match.params.description,
      price: this.props.match.params.price,
      quantity: this.props.match.params.quantity,
      isActive: this.props.match.params.isActive,
      categories: this.props.match.params.categories,
      imageUrl: this.props.match.params.imageUrl
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getProduct = this.getProduct.bind(this)
  }

  getProduct(id) {
    let data = Axios.get(`/api/products/${id}`)
    return data
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
    Axios.put(`/api/products/${this.props.match.params.id}`, {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      quantity: this.state.quantity,
      categories: this.state.categories,
      isActive: isActForm,
      imageUrl: this.state.imageUrl
    })
    this.setState({
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      quantity: this.state.quantity,
      categories: this.state.categories,
      isActive: isActForm,
      imageUrl: this.state.imageUrl
    })
  }

  render() {
    return (
      <div>
        <h2 className="update-product-title">Update Product</h2>
        <ProductForm
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default updateProduct

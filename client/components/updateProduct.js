import React, {Component} from 'react'
import ProductForm from './ProductForm'
import Axios from 'axios'
import {fetchProduct} from '../store/singleProduct'
import {connect} from 'react-redux'

class updateProduct extends Component {
  componentDidMount() {
    this.props.getSingleProductFromStore(this.props.match.params.id)
  }
  // constructor(props) {
  //   super(props)
  // }

  //   this.state = {
  //     id: this.props.match.params.id,
  //     name: this.props.match.params.name,
  //     description: this.props.match.params.description,
  //     price: this.props.match.params.price,
  //     quantity: this.props.match.params.quantity,
  //     isActive: this.props.match.params.isActive,
  //     categories: [],
  //     imageUrl: this.props.match.params.imageUrl
  //   }

  //   this.handleChange = this.handleChange.bind(this)
  //   this.handleSubmit = this.handleSubmit.bind(this)
  //   this.getProduct = this.getProduct.bind(this)
  // }

  // getProduct(id) {
  //   let data = Axios.get(`/api/products/${id}`)
  //   return data
  // }

  // handleChange(evt) {
  //   evt.preventDefault()
  //   this.setState({
  //     [evt.target.name]: evt.target.value
  //   })
  // }

  // handleSubmit(evt) {
  //   evt.preventDefault()
  //   Axios.put(`/api/products/${this.props.match.params.id}`, {
  //     name: this.state.name,
  //     description: this.state.description,
  //     price: this.state.price,
  //     quantity: this.state.quantity,
  //     categories: this.state.categories,
  //     isActive: this.state.isActive,
  //     imageUrl: this.state.imageUrl
  //   })
  //   this.setState({
  //     name: this.state.name,
  //     description: this.state.description,
  //     price: this.state.price,
  //     quantity: this.state.quantity,
  //     categories: this.state.categories,
  //     isActive: this.state.isActive,
  //     imageUrl: this.state.imageUrl
  //   })
  // }

  render() {
    console.log('STATE PRODUCT!!!', this.props)
    console.log('PRODUCT ID', this.props.product.id)
    return (
      <div>
        HELLO
        {/* <ProductForm */}
        {/* // state={this.state}
          // handleChange={this.handleChange}
          // handleSubmit={this.handleSubmit}
        /> */}
      </div>
    )
  }
}

const mapState = state => {
  return {
    product: state.product
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleProductFromStore: id => dispatch(fetchProduct(id))
  }
}

export default connect(mapState, mapDispatch)(updateProduct)

// export default updateProduct

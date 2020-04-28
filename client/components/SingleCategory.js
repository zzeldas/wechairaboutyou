import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchCreateProduct} from '../store/cart'
import {fetchAllCategories, fetchSingleCategory} from '../store/categories'

class SingleCategory extends React.Component {
  componentDidMount() {
    this.props.getSingleCategoryFromStore(this.props.match.params.categoryId)
    this.props.getCategoriesFromStore()
  }

  render() {
    const {user, pInCategory} = this.props
    console.log('this.props: ', this.props)
    console.log('PROPS CATEGORY: ', this.props.pInCategory)

    //GUEST CART ADDCART
    const addToCart = (product, quantityToAdd) => {
      let cart = JSON.parse(sessionStorage.getItem('cart') || '{}')
      let oldQuantity = cart[product.id] || 0
      let newQuantity = oldQuantity + quantityToAdd
      cart[product.id] = newQuantity
      sessionStorage.setItem('cart', JSON.stringify(cart))
    }

    let productsView
    if (!user.id && pInCategory.length > 0) {
      productsView = (
        <div className="products-div">
          {pInCategory.map(product => (
            <div key={product.id} className="products-container">
              <div className="products">
                <img
                  src={product.imageUrl}
                  height="200"
                  width="200"
                  className="products-img"
                />
                <div className="products-info">
                  <Link to={`/products/${product.id}`} className="product-name">
                    {product.name}
                  </Link>
                  <p className="price">${product.price}</p>
                  {/* <p className="quantity">Available Quantity: {product.quantity}</p> */}
                  <button
                    type="button"
                    onClick={() => addToCart(product, 1)}
                    className="add-to-cart"
                  >
                    {' '}
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    } else if (pInCategory.length > 0) {
      productsView = (
        <div>
          {user.isAdmin === true && (
            <Link to="/addproduct">
              <button type="button" className="add-new-product">
                Add Product
              </button>
            </Link>
          )}

          <div className="products-div">
            {pInCategory.map(product => (
              <div key={product.id} className="products-container">
                <div className="products">
                  <div className="products-img">
                    <img src={product.imageUrl} height="200" width="200" />
                  </div>
                  <div className="products-info">
                    <Link
                      to={`/products/${product.id}`}
                      className="product-name"
                    >
                      {product.name}
                    </Link>

                    <p className="price">${product.price}</p>
                    {/* <p className="quantity">
                        Available Quantity: {product.quantity}
                      </p> */}

                    <button
                      type="button"
                      onClick={() => this.props.createItem(product)}
                      className="add-to-cart"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    //USER CART ADDCART

    return <div>{productsView}</div>
  }
}

const mapState = state => {
  return {
    products: state.products,
    user: state.user,
    categories: state.categories.all,
    pInCategory: state.categories.singleCategory
  }
}

const mapDispatch = dispatch => {
  return {
    // getProductsFromStore: () => dispatch(fetchAllProducts()),
    createItem: product => dispatch(fetchCreateProduct(product)),
    getCategoriesFromStore: () => dispatch(fetchAllCategories()),
    getSingleCategoryFromStore: id => dispatch(fetchSingleCategory(id))
  }
}

export default connect(mapState, mapDispatch)(SingleCategory)

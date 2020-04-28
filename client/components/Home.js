import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../store/products'
import {fetchCreateProduct} from '../store/cart'

export class Home extends React.Component {
  componentDidMount() {
    this.props.getProductsFromStore()
  }

  render() {
    const {products, user} = this.props

    //GUEST CART ADDCART
    const addToCart = (product, quantityToAdd) => {
      let cart = JSON.parse(sessionStorage.getItem('cart') || '{}')
      let oldQuantity = cart[product.id] || 0
      let newQuantity = oldQuantity + quantityToAdd
      cart[product.id] = newQuantity
      sessionStorage.setItem('cart', JSON.stringify(cart))
    }

    const bestSeller = products.filter(product => product.id <= 7)

    let productsView
    if (!user.id) {
      productsView = (
        <div>
          <h2 className="best-seller">Best Sellers</h2>
          <div className="products-div">
            {bestSeller.map(product => (
              <div key={product.id} className="products-container">
                <div className="products">
                  <img
                    src={product.imageUrl}
                    height="200"
                    width="200"
                    className="products-img"
                  />
                  <div className="products-info">
                    <Link
                      to={`/products/${product.id}`}
                      className="product-name"
                    >
                      {product.name}
                    </Link>
                    <p className="price">${product.price}</p>
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
        </div>
      )
    } else {
      productsView = (
        <div>
          <h2 className="best-seller">Best Sellers</h2>
          <div className="products-div">
            {bestSeller.map(product => (
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
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getProductsFromStore: () => dispatch(fetchAllProducts()),
    createItem: product => dispatch(fetchCreateProduct(product))
  }
}

export default connect(mapState, mapDispatch)(Home)

// class Home extends React.Component {
//   render() {
//     return (
//       <div>
//         <main>
//           <center>
//             <h1 className="m-5">Welcome! We Chair About You!</h1>
//             <img src="/chairaboutyou.png" height="400" width="600" />
//             <p />
//             <p />
//             {/* <p>This seems like a nice place to get started with some Routes!</p> */}
//             <Link to="/products">View All Products</Link>
//           </center>
//         </main>
//       </div>
//     )
//   }
// }

// export default Home

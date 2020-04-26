import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../store/products'
import {fetchPendingOrder} from '../store/order'
import {fetchCart, fetchCreateProduct} from '../store/cart'

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getProductsFromStore()
    this.props.getCreateProduct()
    this.props.getCart()
  }

  render() {
    const {products, user} = this.props

    //GUEST CART
    function removeItem(productId) {
      let guestCart = JSON.parse(sessionStorage.getItem('cart'))
      delete guestCart[productId]
      sessionStorage.setItem('cart', JSON.stringify(guestCart))
    }
    let cart = JSON.parse(sessionStorage.getItem('cart') || '{}')
    let cartProducts = products.filter(product => product.id in cart)

    let result = 0
    cartProducts.forEach(product => {
      result += product.price * cart[product.id]
    })
    let fullAmount = result

    //USER CART
    console.log('this props ', this.props)
    let orderProducts = this.props.cart.cart.orderproducts

    let userCartProducts

    if (orderProducts) {
      let orderProductsId = orderProducts.map(
        orderProduct => orderProduct.productId
      )

      userCartProducts = orderProductsId
        .map(id => {
          return products.filter(product => id === product.id)
        })
        .flat()

      console.log('USERCARTPRODUCTS', userCartProducts)
      console.log('ORDERPRODUCTS', orderProducts)
    }

    return (
      <div>
        <h1>MY CART</h1>
        {/* <p>FULL AMOUNT: ${fullAmount}</p>
        <button type="button">Check Out</button> */}
        {!this.props.user.id ? (
          cartProducts.map(product => (
            <div key={product.name}>
              <img src={product.imageUrl} height="200" width="200" />
              <Link to={`/products/${product.id}`}>{product.name}</Link>
              <p>Price: ${product.price}</p>
              <p>Quantity: {cart[product.id]}</p>
              <p>Unit Total: ${product.price * cart[product.id]}</p>
              <button
                type="button"
                onClick={() => {
                  removeItem(product.id)
                  location.reload()
                }}
              >
                Remove Button
              </button>
            </div>
          ))
        ) : (
          <div>
            {userCartProducts ? (
              userCartProducts.map((product, i) => (
                <div key={product.name}>
                  <img src={product.imageUrl} height="200" width="200" />
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                  <p>Price: ${product.price}</p>
                  <p>Quantity: {orderProducts[i].quantity}</p>
                  <p>
                    Unit Total: ${product.price * orderProducts[i].quantity}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      removeItem(product.id)
                      location.reload()
                    }}
                  >
                    Remove Button
                  </button>
                </div>
              ))
            ) : (
              <h3>Nothing in your cart</h3>
            )}
          </div>
        )}
        <p>FULL AMOUNT: ${fullAmount}</p>
        <Link to="/checkoutpage">
          <button type="button">Check Out</button>
        </Link>
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products,
    user: state.user,
    cart: state.cart,
    orderproducts: state.orderproducts
  }
}

const mapDispatch = dispatch => {
  return {
    getProductsFromStore: () => dispatch(fetchAllProducts()),
    getCreateProduct: () => dispatch(fetchCreateProduct()),

    getPendingOrderFromStore: () => dispatch(fetchPendingOrder()),

    getCart: () => dispatch(fetchCart())
  }
}

export default connect(mapState, mapDispatch)(Cart)

// import React from 'react'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import {fetchAllProducts} from '../store/products'
// import {fetchPendingOrder} from '../store/order'
// import {fetchCart} from '../store/cart'

// export class Cart extends React.Component {
//   componentDidMount() {
//     this.props.getProductsFromStore()
//     // this.props.getPendingOrderFromStore()
//     this.props.getCart()
//   }

//   render() {
//     const {products, user} = this.props
//     console.log('CART PROPS', this.props)
//     function removeItem(productId) {
//       let guestCart = JSON.parse(sessionStorage.getItem('cart'))
//       delete guestCart[productId]
//       sessionStorage.setItem('cart', JSON.stringify(guestCart))
//     }
//     let cart = JSON.parse(sessionStorage.getItem('cart') || '{}')
//     let cartProducts = products.filter(product => product.id in cart)

//     let result = 0
//     cartProducts.forEach(product => {
//       result += product.price * cart[product.id]
//     })
//     let fullAmount = result

//     console.log('this props ', this.props)
//     let orderProducts = this.props.cart.orderproducts

//     let userCartProducts

//     if (orderProducts) {
//       let orderProductsId = orderProducts.map(
//         orderProduct => orderProduct.productId
//       )

//       userCartProducts = orderProductsId
//         .map(id => {
//           return products.filter(product => id === product.id)
//         })
//         .flat()

//       console.log(userCartProducts)
//     }

//     return (
//       <div>
//         <h1>MY CART</h1>
//         <p>FULL AMOUNT: ${fullAmount}</p>
//         <button type="button">Check Out</button>
//         {!this.props.user.id ? (
//           cartProducts.map(product => (
//             <div key={product.name}>
//               <img src={product.imageUrl} height="200" width="200" />
//               <Link to={`/products/${product.id}`}>{product.name}</Link>
//               <p>Price: ${product.price}</p>
//               <p>Quantity: {cart[product.id]}</p>
//               <p>Unit Total: ${product.price * cart[product.id]}</p>
//               <button
//                 type="button"
//                 onClick={() => {
//                   removeItem(product.id)
//                   location.reload()
//                 }}
//               >
//                 Remove Button
//               </button>
//             </div>
//           ))
//         ) : !this.props.cart.orderproducts ? (
//           <div>
//             <h3>There are currently no chairs in your shopping cart!</h3>
//             <Link to="/products">Look for chairs to add to your cart</Link>
//           </div>
//         ) : (
//           <div>
//             {userCartProducts ? (
//               userCartProducts.map((product, i) => (
//                 <div key={product.name}>
//                   <img src={product.imageUrl} height="200" width="200" />
//                   <Link to={`/products/${product.id}`}>{product.name}</Link>
//                   <p>Price: ${product.price}</p>
//                   <p>Quantity: {orderProducts[i].quantity}</p>
//                   <p>
//                     Unit Total: ${product.price * orderProducts[i].quantity}
//                   </p>
//                   <button
//                     type="button"
//                     onClick={() => {
//                       removeItem(product.id)
//                       location.reload()
//                     }}
//                   >
//                     Remove Button
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <h3>Nothing in your cart</h3>
//             )}
//           </div>
//         )}
//       </div>
//     )
//   }
// }

// const mapState = state => {
//   return {
//     products: state.products,
//     user: state.user,
//     cart: state.cart
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     getProductsFromStore: () => dispatch(fetchAllProducts()),

//     getPendingOrderFromStore: () => dispatch(fetchPendingOrder()),

//     getCart: () => dispatch(fetchCart())
//   }
// }

// export default connect(mapState, mapDispatch)(Cart)

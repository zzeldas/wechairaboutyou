import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const ProductForm = props => {
  const {state, handleChange, handleSubmit} = props
  return (
    <main>
      <h2>Product Form</h2>
      <div className="box">
        <img src="/chairaboutyoulogo.png" />
      </div>
      <p />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <ul className="flex-outer">
            <li>
              <label htmlFor="Name">Name:</label>
              <input
                placeholder="Product Name"
                onChange={handleChange}
                type="text"
                name="name"
                value={state.name}
                required
              />
            </li>

            <li>
              <label htmlFor="description">Description:</label>
              <input
                placeholder="Product Description"
                onChange={handleChange}
                type="text"
                name="description"
                value={state.description}
              />
            </li>

            <li>
              <label htmlFor="imageUrl">Image URL:</label>
              <input
                placeholder="imageUrl"
                onChange={handleChange}
                type="text"
                name="imageUrl"
                value={state.imageUrl}
              />
            </li>
            <li>
              <label htmlFor="price">Price:</label>
              <input
                placeholder="Price"
                onChange={handleChange}
                type="text"
                name="price"
                value={state.price}
              />
            </li>
            <li>
              <label htmlFor="quantity">quantity:</label>
              <input
                placeholder="Quantity"
                onChange={handleChange}
                type="text"
                name="quantity"
                value={state.quantity}
                required
              />
            </li>
            <li>
              <label htmlFor="categories">categories:</label>
              <input
                placeholder="PLEASE ENTER CATEGORIES SEPARATED BY COMMAS"
                onChange={handleChange}
                type="text"
                name="categories"
                value={state.categories}
                required
              />
            </li>
            <li>
              <label htmlFor="isActive">isActive:</label>
              <input
                placeholder="isActive"
                onChange={handleChange}
                type="text"
                name="isActive"
                value={state.isActive}
                required
              />
            </li>
            <li>
              <button type="submit">Submit</button>
            </li>
          </ul>
        </form>
      </div>
    </main>
  )
}

export default ProductForm

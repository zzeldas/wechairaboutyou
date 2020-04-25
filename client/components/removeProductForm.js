import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const removeProductForm = props => {
  const {state, handleChange, handleSubmit} = props
  return (
    <main>
      <h2 className="headercenter"> You are about to delete this product</h2>
      <div className="box">
        <img src="/chairaboutyoulogo.png" />
      </div>
      <p />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <ul className="flex-outer">
            <li>
              <label htmlFor="Name">Id:</label>
              <input
                placeholder="Product Id"
                onChange={handleChange}
                type="text"
                name="name"
                value={state.id}
                readOnly
              />
            </li>

            <li>
              <label htmlFor="Name">Name:</label>
              <input
                placeholder="Product Name"
                onChange={handleChange}
                type="text"
                name="name"
                value={state.name}
                readOnly
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
                readOnly
              />
            </li>
            <li>
              <button type="submit">Remove Product</button>
            </li>
          </ul>
        </form>
      </div>
    </main>
  )
}

export default removeProductForm

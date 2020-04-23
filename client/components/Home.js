import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <main>
        <center>
          <h1 className="m-5">Welcome! We Chair About You!</h1>
          <p>This seems like a nice place to get started with some Routes!</p>
          <Link to="/products">View All Products</Link>
        </center>
      </main>
    </div>
  )
}

export default Home

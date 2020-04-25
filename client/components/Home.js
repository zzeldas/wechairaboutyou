import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <main>
        <center>
          <h1 className="m-5">Welcome! We Chair About You!</h1>
          <img src="/chairaboutyou.png" height="400" width="600" />
          <Link to="/products">View All Products</Link>
        </center>
      </main>
    </div>
  )
}

export default Home

import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div>
        <main>
          <center>
            <h1 className="m-5">Welcome! We Chair About You!</h1>
            <img src="/chairaboutyou.png" height="400" width="600" />
            <p />
            <p />
            {/* <p>This seems like a nice place to get started with some Routes!</p> */}
            <Link to="/products">View All Products</Link>
          </center>
        </main>
      </div>
    )
  }
}

export default Home

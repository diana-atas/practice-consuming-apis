import React from 'react'
import Disney from './Disney'
import Affirmations from './Affirmations'

// import Nav from './Nav'

function App() {
  return (
    <>
      {/* <Nav /> */}
      <div className="grid columns-3">
        <Disney />

        <h1>Your affirmation here...</h1>
        <Affirmations />
      </div>
    </>
  )
}

export default App

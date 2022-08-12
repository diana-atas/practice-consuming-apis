import React, { useState, useEffect } from 'react'
import request from 'superagent'

function Affirmations() {
  //https://www.affirmations.dev

  const [affirmation, setAffirmation] = useState('')

  useEffect(() => {
    request
      .get('/api/affirmation')
      .then((response) => {
        const { affirmation } = response.body
        setAffirmation(affirmation)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <p>{affirmation}</p>
    </>
  )
}
export default Affirmations

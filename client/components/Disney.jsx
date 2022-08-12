import React, { useEffect, useState } from 'react'

import { fetchCharacter } from '../apiClient'

function Disney() {
  const [character, setCharacter] = useState('')

  useEffect(() => {
    fetchCharacter()
      .then((data) => {
        setCharacter(data)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <h1>{character.name}</h1>
      <img src={character.imageUrl} alt={character.imageUrl} />
    </>
  )
}

export default Disney

/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const param = useParams()
  return (
    <div>
      Hey i am {param.username}
    </div>
  )
}

export default User

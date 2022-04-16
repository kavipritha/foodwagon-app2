import React, { useContext } from 'react'
import AuthContext from '../utils/authContext'

const PrivatePage = () => {
  const auth = useContext(AuthContext)
  //console.log(auth)
  return <h2> {auth.authenticatedStatus ? 'Authenticated' : 'UnAuthorized'}</h2>
}

export default PrivatePage

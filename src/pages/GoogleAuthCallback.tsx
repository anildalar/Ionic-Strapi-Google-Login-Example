import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { environment } from '../environment/environment'

function GoogleAuthCallback() {
  const [auth, setAuth] = useState<any>()
  const location = useLocation()
  useEffect(() => {
    if (!location) {
      return
    }
    console.log('location >>>',location)
    const { search } = location
    axios({
      method: 'GET',
      url: `${environment.url}/api/auth/google/callback?${search}`,
    })
      .then((res) => res.data)
      .then(setAuth)
  }, [location])

  return (
    <div>
        <h1>JWT</h1>
      {auth && (
        <>
          <div>Jwt: {auth.jwt}</div>
          <div>User Id: {auth.user.id}</div>
          <div>Provider: {auth.user.provider}</div>
        </>
      )}
    </div>
  )
}

export default GoogleAuthCallback
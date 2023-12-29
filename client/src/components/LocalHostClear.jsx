import {useEffect} from 'react'
import { Outlet, Navigate } from "react-router-dom"
import { signOutUserSuccess } from '../redux/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function LocalHostClear() {
  const {currentUser, loading, error} = useSelector((state) => state.user)
  const dispatch = useDispatch()

    useEffect(() => {
      const checkCookie = async () => {
        const res = await fetch ('/api/auth/checkCookie')
        const token = await res.json()
        console.log(token.status)
        
        if (!token.status) {
          dispatch(signOutUserSuccess())
        }
      }
        
      checkCookie()
      }, [])

  return (
    <Outlet/>
  )
}

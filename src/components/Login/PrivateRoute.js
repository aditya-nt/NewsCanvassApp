import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { useSubsContext } from "../../contexts/SubscribeContext"
import SubscribeRoute from "../../Routes/SubscribeRoute"


export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  const thisprops = {
    component: Component, ...rest 
  }

  return (
    <Route thisprops
      render={props => {
        return currentUser ? <SubscribeRoute {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}

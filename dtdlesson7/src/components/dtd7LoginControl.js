import React from 'react'
import dtd7LoginComp from './dtd7LoginComp'
import dtd7LogoutComp from './dtd7LogoutComp'

export default function TvcLoginControl(props) {
    const dtd7Element = props.isLoggedIn ? <dtd7LoginComp /> : <dtd7LogoutComp />

    

  return (
    <div>
      {dtd7Element}
    </div>
  )
}
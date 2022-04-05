import React from 'react'

import {Outlet } from 'react-router-dom'

export default function Home(){
     
  return(
  <div className="container" >
    
    <h1>
      Welcome !
   </h1>

      <Outlet/>

  </div>
  )

}
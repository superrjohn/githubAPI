import React from 'react'

import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import User from '../pages/User.jsx'
import UserName from '../pages/UserName'
import NoMatch from '../pages/NoMatch'
import Repo from '../pages/Repo'

import {  useRoutes } from 'react-router-dom'

export default function GetRoutes() {
  let routes  = [
  {
    path: '/',
    element: <Home/>,
    children: [
      { index: true, element: <User /> },
      {
        path: '/user',
        element: <User/>,
          children:[{
          path: ':username/repos',
          element: <UserName/>,
          children:[{
            path: ':repo',
            element: <Repo/>
          }]
      },
    ],
  },
  {
    path: '/About',
    element: <About/>
  }
],

},
{ path: "*", element: <NoMatch /> },
];

let element = useRoutes(routes);

  return (
    <div>
      {element}
    </div>
  )
}
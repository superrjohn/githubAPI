import React from 'react'
import { HashRouter  } from 'react-router-dom'
import GetRoutes from './routes'

export default function App() {
    return(
      <HashRouter>
        <GetRoutes/>
      </HashRouter>
    )
}
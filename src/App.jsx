import React from 'react'
import { BrowserRouter  } from 'react-router-dom'
import GetRoutes from './routes/index'

export default function App() {
    return(
      <BrowserRouter>
        <GetRoutes/>
      </BrowserRouter>
    )
}
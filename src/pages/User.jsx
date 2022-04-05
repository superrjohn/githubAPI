import React from 'react'
import { useNavigate,useLocation, Outlet } from 'react-router-dom'

export default function User(){
     
  let location = useLocation()
  let  navigate = useNavigate()
  let [userData, setUserData] = React.useState('')

  /*React.useEffect(() => {
    //console.log('userData')
  }, [userData])*/

  function handleSubmit(e){
    e.preventDefault();
    navigate(`/user/${userData}/repos`) 
    
  }

  return(
  <div >
    <h1>
      {location.pathname == '/'? 'Search User' : '搜尋結果'}
   </h1>
   <form id='myForm' onSubmit={handleSubmit}>
    <div>
      <input type='text'
          onChange={(e) => {
            let name = e.target.value.split(' ').join('')
            //console.log(name)
            setUserData(name)
          }}
        ></input>
    </div>
    <span >
      <button type='submit'>Search</button>  
    </span>  
   </form>

    <Outlet/>
  </div>
  )

}
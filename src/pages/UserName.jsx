import React from 'react'

import { useParams, NavLink ,Outlet } from 'react-router-dom'

import request from '../common/utils'

export default function UserName(){
  let  user  = useParams()
  let [userData, setUserData] = React.useState(null)
  let [isLoading , setLoading] = React.useState(true)
  let [isPage , setPage] = React.useState(2)
  
   function getAPI(per_page,page) {
    return request({
      url: `users/${user.username}/repos`,
      params: {
        per_page,
        page
      }
    })
  }

  function handleScroll(e){
    if(e.target.clientHeight + parseInt(e.target.scrollTop) 
    === e.target.scrollHeight){
      getAPI(10,isPage).then((res) => {
        setUserData([...userData,...res.data])
      })
      setPage(isPage + 1)
    }
  }

  React.useEffect(() => {
   getAPI(10,1).then((res) => {
    setUserData(res.data)
    //console.log(res.data)
    setLoading(false)
   })
  }, [user])

  if(isLoading) {
    return <div className='show'>Loading....</div>
  }


  return(
    <div id='box' className='row'>
      <div className='col-5' style={{border: 'solid 1px',
      overflowY: 'auto',
      height: '460px'}}
      onScroll={handleScroll}>
      <h1>
        <img width={100} height={100} 
        src={userData[0].owner.avatar_url}/>
        {user.username}
      </h1>
    
    <div className='show'>
    language/name/stargazers_count
    {userData.map((data) =>(
      
        <NavLink
        key={data.id}
        style={({ isActive }) =>{
          return {
            display: 'block',
            margin: '1rem 0',
            color: isActive? 'red' : ''
          }
        }}
        to = {data.name}
        >
          {data.language}
          /   {'     '}
         {data.name}
         /    {'     '}
         {data.stargazers_count}
        </NavLink> 
      ))}
    
    </div>
    </div>

      <div className='col-7'><Outlet/></div>

    </div>
  )
}
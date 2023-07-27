import React from 'react'
import './Header.css'

const Header = ({ setIsAdding }) => {

 const logout = ()=>{
  localStorage.clear()
  window.location.reload()
 }

  return (
    <header className='h-container'>
    <div className='heading'>MY EXPENSE MANAGER</div>
   
    
    <div>
    <button onClick={() => setIsAdding(true)} className='add-button'>+ Add New Expense</button>
      <button className='logout-btn' onClick={logout}>Logout</button>
    </div>
</header>
  )
}

export default Header

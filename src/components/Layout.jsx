import React from 'react'
import NavPage from './NavPage'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <div>
      <NavPage/>
      {props.children}
      <Footer/>
    </div>
  )
}

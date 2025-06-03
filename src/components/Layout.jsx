import { useState } from "react"
import Authentication from "./Authentication"
import Modal from "./Modal"

export default function Layout(props){

  const { children } = props
  const [ showModal, setShowModal ] = useState(false)

  

  const header = (
    <header>
      <div>
        <h1 className="text-gradient">COFFEE TRACKER</h1>
        <p>For Coffee Insatiates</p>
      </div>
      <button
      onClick={() => {
        setShowModal(true)
      }}
      >
        <p>Sign up free</p>
        <i className="fa-solid fa-mug-hot"></i>
      </button>
    </header>
  )

  const footer = (
    <footer>
      <p>made by <a href="https://github.com/utkrshydv" target="_blank">utkrshydv</a></p>
    </footer>
  )

  return(
    <>
    {showModal && (<Modal 
    handleCloseModal = {() => {setShowModal(false)}}
    >
      <Authentication />
    </Modal>)}
    {header}
    <main>
      {children}
    </main>
    {footer}
    </>
  )
}
export default function Layout(props){

  const { children } = props

  const header = (
    <header>
      <div>
        <h1 className="text-gradient">COFFEE TRACKER</h1>
        <p>For Coffee Insatiates</p>
      </div>
      <button>
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
    {header}
    <main>
      {children}
    </main>
    {footer}
    </>
  )
}
import Navbar from "./NavBar/Navbar";
import Price  from "./pages/Price"
import About from  "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"



function App() {
  let Component
  switch (window.location.pathname) {
      case "/":
        Component=  <Home/>
      break;
      case "/precio":
        Component=  <Price/>
      break;
      case "/about": 
        Component=  <About/>
       break;
      case "/contact":
        Component=  <Contact/>
      break;

  
    default:
      break;
  }
  return (
    <>
  <Navbar />
  <div className="container">{Component}</div>
  </>
  )
}

export default App;

 import './App.css';
  import "bootstrap/dist/css/bootstrap.min.css";
  import Navbar from "./Components/Navbar";
  import Header from "./Components/Header";
  import Contact from "./Components/Contact";
  import Particles from "react-particles-js";

  function App() {
    return (
      <div className="App">
        <>
      <Particles
      className="particles-canvas"
      params={{
        "particles": {
            "number": {
                "value": 280,
                "density": {
                    "enable": true,
                    "value_area": 900
                }
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width":6,
                "color": "#f9ab00"
              }
            
            }
            
          }
    }} />
        <Navbar/>
        <Header/>
        <Contact/>
        </>
      </div>
    );
  }

  export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sobremi from "./components/SobreMi";
import Trabajos from "./components/Trabajos";

function App() {
  return (
 <>
 <Navbar/>
 <Header/>
 <Sobremi/>
 <Trabajos />
 <Footer/>
 </>
 
 );
}

export default App;

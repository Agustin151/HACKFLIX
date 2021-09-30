import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import Contacto from "./components/Contacto";
import SobreNosotros from "./components/SobreNosotros";
import ERROR from "./components/Error";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pelicula/:id" component={MovieDetail} />
        <Route exact path="/Contacto" component={Contacto} />
        <Route exact path="/SobreNosotros" component={SobreNosotros} />
        <Route exact path="/Error" component={ERROR} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

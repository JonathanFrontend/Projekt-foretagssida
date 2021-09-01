import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Startpage from './components/Startpage'
import Header from './components/Header';
import Footer from './components/Footer'
import About from './components/About';
function App() {
  return (
    <div>
      <Header />

        <Switch>
          <Redirect exact path="/" to="/startpage" />
          <Route path="/startpage" component={Startpage} />
<<<<<<< Updated upstream
=======
          <Route path="/contact" component={Kontakt} />
          {/* 
>>>>>>> Stashed changes
          <Route path="/about" component={About} />
          <Route component={ErrorPage} />  */}
          
        </Switch>

      <Footer />
    </div>
  );
}

export default App;

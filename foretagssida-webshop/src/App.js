import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Startpage from './components/Startpage'
import Kontakt from './components/Kontakt';
import Header from './components/Header';
import Footer from './components/Footer'
import About from './components/About';
import Faq from './components/Faq';
import News from './components/News';
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Redirect exact path="/" to="/startpage" />
        <Route path="/startpage" component={Startpage} />
        <Route path="/contact" component={Kontakt} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={Faq} />
        <Route path="/news" component={News} />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;

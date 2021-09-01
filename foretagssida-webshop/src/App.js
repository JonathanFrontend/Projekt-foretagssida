import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Startpage from './components/Startpage'
import Kontakt from './components/Kontakt';

function App() {
  return (
    <div>
      {/* <Header /> */}

        <Switch>
          <Redirect exact path="/" to="/startpage" />
          <Route path="/startpage" component={Startpage} />
          <Route path="/kontakt" component={Kontakt} />
          {/* 
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={ErrorPage} /> 
          */}
        </Switch>

      {/* <Footer /> */}
    </div>
  );
}

export default App;

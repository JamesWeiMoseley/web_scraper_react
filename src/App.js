import './App.css';
import Main from "./component/main";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  <Router>
    <Route exact path='/' component={Main} />
  </Router>
}

export default App;

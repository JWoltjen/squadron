import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FlightLog from './components/FlightLog'
import FlightContextProvider from './contexts/FlightContext'
import FlightForm from './components/FlightForm'
import Navbar from './components/Navbar'
import BRS from './components/BRS'
import PhotoGallery from './components/KoreanWar'
import Home from './components/Home'



function App() {
  return (
<FlightContextProvider>
  <Router>
    <Navbar/>
    <Switch>
      <Route path='/BRS' component={BRS}/>
      <Route path='/PhotoGallery' component={PhotoGallery}/>
      <Route path='/FlightLog' component={FlightLog}/>
    </Switch> 
  <Home/>
  </Router>
</FlightContextProvider>
  )
}

export default App;

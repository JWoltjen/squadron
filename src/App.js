import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FlightLog from './components/FlightLog'
import FlightContextProvider from './contexts/FlightContext'
import FlightForm from './components/FlightForm'
import Navbar from './components/Navbar'
import Squadron from './components/Squadron'
import PhotoGallery from './components/PhotoGallery'
import Home from './components/Home'



function App() {
  return (
<FlightContextProvider>
  <Router>
    <Navbar/>
    <Switch>
      <Route path='/Squadron' component={Squadron}/>
      <Route path='/PhotoGallery' component={PhotoGallery}/>
      <Route path='/FlightLog' component={FlightLog}/>
    </Switch> 
  <Home/>
  </Router>
</FlightContextProvider>
  )
}

export default App;

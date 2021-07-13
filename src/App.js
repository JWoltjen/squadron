import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FlightLog from './components/FlightLog'
import FlightContextProvider from './contexts/FlightContext'
import SquadronContextProvider from './contexts/SquadronContext'

import FlightForm from './components/FlightForm'
import Navbar from './components/Navbar'
import Squadron from './components/Squadron'
import PhotoGallery from './components/PhotoGallery'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
  <SquadronContextProvider>
    <FlightContextProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/Squadron' component={Squadron}/>
          <Route path='/PhotoGallery' component={PhotoGallery}/>
          <Route path='/FlightLog' component={FlightLog}/>
        </Switch> 
      <Home/>
      <Footer/>
      </Router>
    </FlightContextProvider>
</SquadronContextProvider>
  )
}

export default App;

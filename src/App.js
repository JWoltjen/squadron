import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FlightLog from './components/FlightLog'
import FlightContextProvider from './contexts/FlightContext'
import SquadronContextProvider from './contexts/SquadronContext'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Squadron from './components/Squadron'
import PhotoGallery from './components/PhotoGallery'
import Footer from './components/Footer'

function App() {
  return (
  <SquadronContextProvider>
    <FlightContextProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/Squadron' component={Squadron}/>
          <Route path='/PhotoGallery' component={PhotoGallery}/>
          <Route path='/FlightLog' component={FlightLog}/>
          <Home/>
        </Switch> 
      <Footer/>
      </Router>
    </FlightContextProvider>
</SquadronContextProvider>
  )
}

export default App;

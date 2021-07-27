import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FlightLog from './components/FlightLog'
import FlightContextProvider from './contexts/FlightContext'
import SquadronContextProvider from './contexts/SquadronContext'
import Navbar from './components/Navbar'
import Squadron from './components/Squadron'
import PhotoGallery from './components/PhotoGallery'
import Footer from './components/Footer'
import banner from './images/banner.jpg'

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
        <div className='home-container'>
          <h1>Welcome to Squadron!</h1>
          <img className='hero-welcome-img' src={banner}/>
          <div className='home-card'>
          <p>Squadron is a single-page application designed to document missions flown by virtual pilots in a number of popular aviation-based games. With Squadron, you can do the following things:
            <ul className='home-list'>
              <li>Make logs of your flights which record date flown, kills, wingmen, and losses. </li>
              <li>Make a squadron roster which documents the pals you fly with, along with their relative skills and biographical description.</li>
              <li>Post images to the photogallery which display your aerial forays for all to see!</li>
            </ul>
          </p>
          </div>
        </div>
      <Footer/>
      </Router>
    </FlightContextProvider>
</SquadronContextProvider>
  )
}

export default App;

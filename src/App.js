import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FlightLog from './components/FlightLog'
import FlightContextProvider from './contexts/FlightContext'
import FlightForm from './components/FlightForm'
import Navbar from './components/Navbar'
import BRS from './components/BRS'
import KoreanWar from './components/KoreanWar'
import ServerInfo from './components/ServerInfo'
function App() {
  return (
<FlightContextProvider>
  <Router>
    <div className='App'>
    <Navbar/>
    <Switch>
      <Route path='/BRS' component={BRS}/>
      <Route path='/KoreanWar' component={KoreanWar}/>
      <Route path='/ServerInfo' component={ServerInfo}/>
    </Switch> 
    <FlightLog/>
    <FlightForm/>
    </div>
  </Router>
</FlightContextProvider>
  )
}

export default App;

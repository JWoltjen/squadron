import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FlightLog from './components/FlightLog'
import FlightContextProvider from './contexts/FlightListContext'
import FlightForm from './components/FlightForm'

function App() {
  return (
<FlightContextProvider>
  <Router>
    <div className='App'>
    <FlightLog/>
    <FlightForm/>
    </div>
  </Router>
</FlightContextProvider>
  )
}

export default App;

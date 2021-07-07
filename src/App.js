import './App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom'
import FlightLog from './components/FlightLog'
import FlightContextProvider from './contexts/FlightContext'
import FlightForm from './components/FlightForm'

function App() {
  return (
<FlightContextProvider>
  <FlightLog/>
  <FlightForm/>
</FlightContextProvider>
  )
}

export default App;

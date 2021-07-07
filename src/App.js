import './App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom'
import FlightLog from './components/FlightLog'
import FlightContextProvider from './contexts/FlightContext'

function App() {
  return (
<FlightContextProvider>
  <FlightLog/>
</FlightContextProvider>
  )
}

export default App;

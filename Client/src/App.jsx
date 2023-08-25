import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login from './components/pages/Login'
import Registration from './components/pages/Registration.Jsx'
import Home from './components/pages/Home'

function App() {
 

  return (
   <>
  <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  </Router>
   </>
  )
}

export default App

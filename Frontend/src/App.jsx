
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Register from './Component/Register/Register'
import Edit from './Component/Edit/Edit'
import Detail from './Component/Detail/Detail'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
function App() {
  

  return (
    <>
      <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' Component={Home}/>
              <Route path='/Register' Component={Register}/>
              <Route path='/Edit/:id' Component={Edit}/>
              <Route path='/Detail/:id' Component={Detail}/>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Create from './crud/Create'
import Home from './Home'
// import Dashboard from './crud/Dashboard'
import Edit from './crud/Edit'
import { Provider } from 'react-redux'
import store from './redux5/store'
import Counter from './redux5/Counter'
import Products from './reduxTunk2/Products'
import Register from './JWT/Register'
import Login from './JWT/Login'
import Dashboard from './JWT/Dashboard'


function App() {

  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          {/* <Route path='/dashboard' element={<Dashboard />} /> */}
          <Route path='/edit/:id' element={<Edit />} />
          {/* <Route path='/counter' element={<Counter />} /> */}
          <Route path='/products' element={<Products />} />
          {/* <Route path='/redux4' element={<Counter />} /> */}
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Dashboard />} />
          <Route path='/redux5' element={<Counter />} />

          
        </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App

import Home from './routes/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/Navigation/Navigation'
import Shop from './routes/Shop/Shop'
import SignIn from './routes/SignIn/SignIn'
import SignUpForm from './Components/sign-up-form/SignUpForm'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

import './App.css'
import '@fontsource/poppins/300.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/signIn';
import SignUp from './components/SignUp';
import Home from './components/Home';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

import './App.css'
import '@fontsource/poppins/300.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/signIn';
import SignUp from './components/SignUp';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

import {Route, Routes} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { AuthContextProvider } from './context/AuthContext';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Test DB
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/landingpage' element={<LandingPage/>}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

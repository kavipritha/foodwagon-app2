import React, { useContext } from 'react'
import './App.css';
import Home from './containers/home'
import { Link, Route, Routes } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import PrivatePage from './components/PrivatePage'
import ProtectedRoute from './utils/privateRoute'
import AuthContext from './utils/authContext'

function App() {
  const auth = useContext(AuthContext)
  return (
    <div>
   <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/index.html" element={<Home/>} />
          <Route exact path="Login" element={<LoginPage />} /> 
           <Route
            exact
            path="Private"
            element={
              <ProtectedRoute authenticated={auth}>
                <PrivatePage />
              </ProtectedRoute>
            }
          /> 
          {/* <Route exact path="Nested" element={<NestedPage />}>
            <Route path=":categoryName" element={<Category />} />
          </Route> */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
    </div>
   
  );
}

export default App;

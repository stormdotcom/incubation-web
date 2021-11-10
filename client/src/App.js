import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer  from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import ErrorPage from "./components/Home/ErrorPage/ErrorPage";
import Auth from "./components/AuthenticationPage/AuthenticationPage"
// index page shwoing details
function App() {
  return (
 
      <Router>  
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/*" element={<ErrorPage />} />
       </Routes>
       <Footer />
    </Router>
  );
}

export default App;

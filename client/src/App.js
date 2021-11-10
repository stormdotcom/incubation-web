import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer  from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import RegistrationForm from "./components/Home/RegistrationForm/RegistrationForm";
import ErrorPage from "./components/Home/ErrorPage/ErrorPage";
import Auth from "./components/AuthenticationPage/AuthenticationPage"
import BookingForm from "./components/BookingForm/BookingForm";
// index page shwoing details
function App() {
  return (
 
      <Router>  
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/companyregistration" element={<RegistrationForm />} />
        <Route path="/slotbooking" element={<BookingForm />} />
        <Route path="/*" element={<ErrorPage />} />
       </Routes>
       <Footer />
    </Router>
  );
}

export default App;

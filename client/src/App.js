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
import ViewStatus from "./components/Home/ViewStatus/ViewStatus";
import Admin from "./components/Home/Admin/Admin";
import AdminAuth from "./components/Home/Admin/Auth/Auth"
// index page shwoing details
function App() {
  return (
    // todo 
    // jwt authentication
    // slot booking update company collections
    // 
      <Router>  
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={ <Auth />} />
        <Route path="/status" element={<ViewStatus />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/auth" element={<AdminAuth />} />
        <Route path="/*" element={<ErrorPage />} />
       </Routes>
       <Footer />
    </Router>
  );
}

export default App;

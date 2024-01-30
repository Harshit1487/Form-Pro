
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import Header from './components/Header'
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp"
import CreateForm from "./components/CreateForm";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Logout from "./components/Logout";
import ShowForms from "./components/ShowForms";
import ShowQuestions from "./components/ShowQuestions";

// import Sign from './components/Sign'

const App = () => {
  return (
    <div>
      {/* <SignIn /> */}
      <Router> 
        <Header /> 
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/createform" element={<CreateForm />} />
            <Route path="/showforms" element={<ShowForms />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/showquestions/:formId" element={<ShowQuestions />} />
            <Route path="*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;

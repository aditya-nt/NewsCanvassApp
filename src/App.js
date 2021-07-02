import './App.css';
import ClatFrame from './components/ClatFrame'
import Login from './components/Login/Login'
import ForgotPassword from "./components/Login/ForgotPassword"
import Signup from "./components/Login/Signup"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./components/Login/PrivateRoute"
import Subscribe from './components/Pages/Subscribe';
import NewsDecoded from './components/Pages/NewsDecoded';
import NewsSimplified from './components/Pages/NewSimplified';
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs';

import Education from "./components/Pages/Education";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsDecodedPage from './components/Pages/NewsDecodedPage';
import NewsSimplifiedPage from './components/Pages/NewsSimplifiedPage';
import ContactUs from './components/Pages/ContactUs';
import AboutCLATExam from './components/Pages/AboutCLATExam';
import SubscribeProvider from './contexts/SubscribeContext';


function App() {


  return (

    <Router>



      <AuthProvider>
        <SubscribeProvider>

          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/CLAT-Section" component={ClatFrame} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/subscribe" component={Subscribe} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/education" component={Education} />
            <Route path="/NewsDecodedPosts/:id" component={NewsDecoded} />
            <Route path="/NewsDecodedPage" component={NewsDecodedPage} />
            <Route path="/NewsSimplifiedPosts/:id" component={NewsSimplified} />
            <Route path="/NewsSimplifiedPage" component={NewsSimplifiedPage} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/About-Clat-Exam" component={AboutCLATExam} />



          </Switch>

        </SubscribeProvider>


      </AuthProvider>
    </Router>


  );
}

export default App;

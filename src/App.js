import Layout from "./components/Layout/Layout";

import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Educations/Educations";
import WorkExp from "./pages/workExp/workExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/Layout/MobileNav/MobileNav";
import { ToastContainer } from 'react-toastify';
function App() {
  const [theme]=useTheme();
  return (
   <>
   <div id={theme}>
    <MobileNav/>
   <Layout/>
   <div className="container">
   <About/>
   <Techstack/>
  
   <WorkExp/>
   
   <Projects/>
   <Education/>
   <ToastContainer />
   <Contact/>
   </div>
   <div className="footer pb-3 ms-3">
    <h4 className="text-center">Made with ❤️ Jaskaran &copy; 2024</h4>
   </div>
   </div>
   <ScrollToTop color="#f29f67" smooth style={{backgroundColor:"#1e1e2c",borderRadius:"80px"}}/>
   </>
  );
}

export default App;

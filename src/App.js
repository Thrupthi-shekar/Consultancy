import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import Services from "./Services.js";
import ContactUs from "./ContactUs.js";
import Careers from "./Careers.js";
import BlogNews from "./BlogNews.js";
import HomePage from "./HomePage.js";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/blog" element={<BlogNews/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
        
     
    </BrowserRouter>
    </div>
  );
}

export default App;

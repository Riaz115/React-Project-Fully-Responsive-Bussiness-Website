import "./App.css";

// this is for the navbar file link
import Navbar from "./Components/Navbar/Navbar";

// this is for the home section link
import Home from "./Components/Home/Home";

// this is for the about section
import About from "./Components/About/About";

// this is for the services section
import Services from "./Components/Services/Services";

// this is for the blog section
import Blog from "./Components/Blog/BlogSection";

// this is for the contact section
import Contact from "./Components/Contact/Contact";

// this is for the footer section
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      {/* this is for the navbar */}
      <Navbar />

      {/* this is for the home */}
      <Home />

      {/* this is for the about */}
      <About />

      {/* this is for the Servies */}
      <Services />

      {/* this is for the blog */}
      <Blog />

      {/* this is for the contact */}
      <Contact />

      {/* this is for the footer */}
      <Footer />
    </>
  );
}

export default App;

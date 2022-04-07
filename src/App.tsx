import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import YourNotes from "./components/YourNotes/YourNotes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <YourNotes />
      <Footer />
    </div>
  );
}

export default App;

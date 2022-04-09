import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import HeroMobile from "./components/HeroMobile/HeroMobile";
import YourNotes from "./components/YourNotes/YourNotes";
import Footer from "./components/Footer/Footer";
import NewNotes from "./components/NewNotes/NewNotes";

function App() {
  return (
    <div>
      <Navbar />
      <HeroMobile />
      <NewNotes />
      <YourNotes />
      <Footer />
    </div>
  );
}

export default App;

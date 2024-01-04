import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        {/* <Projects /> */}
        <Contact />
      </main>
      <SpeedInsights />
    </>
  );
}

export default App
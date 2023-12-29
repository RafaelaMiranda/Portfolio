import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
      </main>
      <SpeedInsights />
    </>
  );
}

export default App
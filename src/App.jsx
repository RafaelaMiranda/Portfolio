import Header from './components/header/Header';
import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Header />
      <SpeedInsights />
    </>
  );
}

export default App
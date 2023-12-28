import Header from './components/header/Header';
import './App.css';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Header />
      <Analytics />
    </>
  );
}

export default App
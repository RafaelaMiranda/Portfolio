import Header from './components/header/Header';
import './App.css';
import * as Analytics from '@vercel/analytics';

function App() {
  
  return (
    <>
      <Header />
      <Analytics />
    </>
  );
}

export default App
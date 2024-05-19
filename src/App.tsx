import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div className="App">
        <Header />
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;

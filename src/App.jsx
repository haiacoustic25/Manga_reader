import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/router';
import './assets/styles/app.css';
import './assets/styles/font.css';
import './assets/styles/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ThemeProvider, { ThemeContext } from './context/ThemeContext';
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components';

import { Router } from './routes/Router';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/themes/default';


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
      <ToastContainer autoClose={1600} position="bottom-right" />
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { AppProvider } from './context';

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Router />
      </AppProvider>
    </BrowserRouter>
  );
}

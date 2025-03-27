import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/index.scss';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <div className='body-wraper'>
          <Header />
          <AppRoutes />
      </div>
          <Footer />  
      </Router>
  </StrictMode>,
)

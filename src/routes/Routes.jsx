import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/A-Propos';
import NotFound from '../pages/404';
import Logement from '../pages/Fiche-Logement';


function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/à-propos' element={<About />} />
            <Route path='/fiche-logement/:id' element={<Logement />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes
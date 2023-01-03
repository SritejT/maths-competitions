import { Routes, Route } from 'react-router-dom';
import Announcements from './modules/Announcements/index';
import Competitions from './modules/Competitions/index';


const Router = () => {
return (
    <Routes>
      <Route path='/' element={<Announcements />} />
      <Route path='/competitions' element={<Competitions />} />
    </Routes>
);
}
export default Router;

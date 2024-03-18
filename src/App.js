import { Route, Routes } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path='/*' element={<UserRoutes/>} />
      <Route exact path='/admin/*' element={<AdminRoutes/>} />
      

     </Routes>
    </div>
  );
}

export default App;

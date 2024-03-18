import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Produts from '../admin/container/Produtcs/Produts';
import PrivateRoutes from './PrivateRoutes';

function AdminRoutes(props) {
    return (
        <div>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route exact path='/product' element={<Produts />} />
                </Route>
            </Routes>
        </div>
    );
}

export default AdminRoutes;
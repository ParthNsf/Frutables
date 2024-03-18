import React from 'react';
import Header from '../user/component/Header/Header';
import Home from '../user/container/Home/Home';
import Shop from '../user/container/Shop/Shop';
import Shop_details from '../user/container/Shop Details/Shop_details';
import Cart from '../user/container/Cart/Cart';
import Chackout from '../user/container/Chackout/Chackout';
import Testimonial from '../user/container/Testimonial/Testimonial';
import Error404 from '../user/container/404 Erorr/Error404';
import Contact from '../user/container/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import Footer from '../user/component/Footer/Footer';
import PrivateRoutes from './PrivateRoutes';

function UserRoutes(props) {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route element={<PrivateRoutes />}>
                    <Route exact path='/shop' element={<Shop />} />

                    <Route exact path='/chackout' element={<Chackout />} />
                    <Route exact path='/Cart' element={<Cart />} />
                </Route>
                <Route exact path='/shop_detalis' element={<Shop_details />} />
                <Route exact path='/shop/:id' element={<Shop_details />} />


                <Route exact path='/testimonial' element={<Testimonial />} />
                <Route exact path='/404' element={<Error404 />} />
                <Route exact path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default UserRoutes;
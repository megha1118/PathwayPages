import React from 'react'
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { Layout } from './components/Layout';
import {HomeIndex,InformationIndex, ContactUsIndex, ProductIndex, } from './pages/';
import { Loginpage } from './pages/LoginPage/Loginpage';
import { NoMatch } from './pages/NoMatch';
import { ForgotPass } from './pages/ForgotPass/ForgotPass';
import { RecoverPass } from './pages/RecoverPass/RecoverPass';
// import { InformationIndex } from './pages/Information/Information.Index';

const Routes = props => {
  return (
    <ReactRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeIndex />} />
          <Route path="login" element={<Loginpage />} />
          <Route path='ForgotPassword' element={<ForgotPass/>}/>
          {/* <Route path="login" element={<Loginpage/>}/> */}
          <Route path='products' element={<ProductIndex/>}/>
          <Route path='recoverpassword' element={<RecoverPass/>}/>
          <Route path="contactUs" element={<ContactUsIndex/>}/>
         <Route path="information" element={<InformationIndex/>}/>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </ReactRoutes>
  )
}

Routes.propTypes = {}

export { Routes}
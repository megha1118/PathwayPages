import React from 'react'
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { Layout } from './components/Layout';
import {HomeIndex,AboutIndex,InformationIndex, ContactUsIndex, ProductIndex, LoginIndex} from './pages/';
import { NoMatch } from './pages/NoMatch';
// import { InformationIndex } from './pages/Information/Information.Index';

const Routes = props => {
  return (
    <ReactRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeIndex />} />
          <Route path="about" element={<AboutIndex />} />
          <Route path="login" element={<LoginIndex/>}/>
          <Route path='products' element={<ProductIndex/>}/>
          <Route path="contactUs" element={<ContactUsIndex/>}/>
         <Route path="information" element={<InformationIndex/>}/>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </ReactRoutes>
  )
}

Routes.propTypes = {}

export { Routes}

import React from 'react';
import { Menubar as Menubarprime } from 'primereact/menubar';
import { Sidebar } from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';


const Menubar = () => {
    const navigate = useNavigate()
    const items = [

        {

            label: 'Home',
            icon: 'pi pi-fw pi-home',

        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-book',

        },
        {
            label: 'Contact Us',
            icon: 'pi pi-fw pi-phone',
            command: () => navigate("/contactUs")
        },
        {
            label: 'Login',
            icon: 'pi pi-fw pi-user',
            command: () => navigate("/login")

        },
        {
            label: 'Products',
            icon: 'pi pi-fw pi-user',
            command: () => navigate("/products")

        }
    ];


    const start = <Link to='/' ><img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img></Link>;
    const end = <Sidebar />;


    return (
        <div className="card">
            <Menubarprime
                model={items}
                // icons={Icons}
                start={start} end={end}
            // <div>
            // </div>
            >

            </Menubarprime>
            {/* <div style={{width:100}}>
         </div>
         <div style={{width:100}}>
            <Link to='/contactUs' >Contact Us </Link>
         </div>
         <div style={{width:100}}>
            <Link to='/about' >About Us </Link>
         </div>
         <div style={{width:100}}>
            <Link to='/information' >Information </Link>
         </div> */}

        </div>
    )
}


export { Menubar }
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const LoginForm = () => {

	return (

		<div className="login-body flex-container "  >

			<div className='flex flex-column gap-4'>
				<div className="form-container flex flex-column gap-5">
					<span className="p-input-icon-left">
						<i className="pi pi-envelope" style={{ fontSize: '1.5rem' }}/>
						<InputText type="text" placeholder="Enter Your Email Here" style={{width:"290px" , height:'60px'}}/>
					</span>
					<span className="p-input-icon-left">
						<i className="pi pi-key" style={{ fontSize: '1.6rem' }} ></i>
						<InputText type="password" placeholder="Enter Your Password Here" style={{width:"290px" , height:'60px'}}/>
					</span>
				</div>
				<div className="login-button-container">
				<Button  style={{width:'140px'}} type="button" label="Login" severity="success" ></Button>
				</div>
				<div className='login-help-container'>
				<span style={{fontSize:'25px'}}>Don’t have an account?<button className="p-link" style={{fontSize:'20px'}} >
					Sign-up here
					</button></span>
			</div>
			<div className='login-forget-password'>
				<span style={{fontSize:'25px'}}><button className="p-link" style={{fontSize:'20px'}} >
                    <Link to='/ForgotPassword'>
                    Forgot Password
                    </Link>
					</button></span>
			</div>
			</div>
			
				
		</div>

	)
}

export { LoginForm }
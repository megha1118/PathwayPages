import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';

const LoginForm = () => {
	const [value, setValue] = useState('');

	const header = <div className="font-bold mb-3">Pick a password</div>;
	const footer = (
		<>
			<Divider />
			<p className="mt-2">Suggestions</p>
			<ul className="pl-2 ml-2 mt-0 line-height-3">
				<li>At least one lowercase</li>
				<li>At least one uppercase</li>
				<li>At least one numeric</li>
				<li>Minimum 8 characters</li>
			</ul>
		</>
	);


	return (

		<div className='flex flex-column gap-7'>
			<div className='flex flex-column gap-4'>
				<div className="form-container flex flex-column gap-5">
					<div className='flex flex-colun gap-4'>
						<div>
							<i className="pi pi-envelope" style={{ fontSize: '2rem' }} />
						</div>
						<div>
							<InputText type="text" placeholder="Enter Your Email Here"
								style={{ width: "200px", height: '60px' }} />
						</div>
					</div>
					<div className='flex flex-colun gap-4' >
						<div>
							<i className="pi pi-key" style={{ fontSize: '2rem' }} ></i>
						</div>
						<div >
							<Password style={{ width: "20rem", height: '60px' }} value={value} placeholder="Enter Your Password Here"
								onChange={(e) => setValue(e.target.value)} header={header} footer={footer} />
						</div>
					</div>
				</div>
				<div className='flex flex-column gap-4'>
					<div className="login-button">
						<Button style={{ width: '100px' }} type="button" label="Login" severity="success" ></Button>
					</div>
				<div className='login-help-container'>
					<span style={{ fontSize: '25px' }}>Don’t have an account?<button className="p-link" style={{ fontSize: '20px' }} >
					<Link to="/Register">
					Sign-up here</Link>	
					</button></span>
				</div>
				<div className='login-forget-password'>
				<span style={{ fontSize: '25px' }}><button className="p-link" style={{ fontSize: '20px' }} >
					<Link to='/ForgotPassword'>Forgot Password</Link>
				</button>
				</span>
			</div>
			</div>
			</div>

			
		</div>

	)
}

export { LoginForm }
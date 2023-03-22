import React from 'react'
import { Card } from "primereact/card"
import { InputText } from 'primereact/inputtext'
import { Link } from "react-router-dom";

export const ForgotPassword = () => {

    const ButtonMailto = ({ mailto, label }) => {
        return (
            <Link
                to='#'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        );
    };

    const footer = (
        <div className="flex flex-wrap justify-content-center">
            <ButtonMailto label="Send OTP" mailto="mailto:@gmail.com" />
            {/* <a href="mailto:email@email"> */}
            {/* <div class="button">otp</div> */}
            {/* </a> */}

        </div>
    );
    return (
        <Card title="Enter Your Email" footer={footer} style={{ width: '40rem', height: '20rem' }}>
            <div className='Forgot-pass-page'>
                <div className="Forgot-pass-body flex flex-column gap-3"  >
                    <div>
                        Enter your email associated with your account and
                        then we will send you OTP to reset your password.
                    </div>
                    <div className="form-container flex flex-column ">
                        <span className="p-input-icon-left">
                            <InputText type="text" placeholder="Enter Your Email Here" style={{ width: "290px", height: '60px' }} />
                        </span>
                    </div>
                </div>
            </div>
        </Card>

    )
}

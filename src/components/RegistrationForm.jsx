import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Card } from 'primereact/card'
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';


export const RegistrationForm = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div >
            <Card style={{ width: "40rem", height: '40rem' }} >
                <div className='register-content flex flex-column align-items-center gap-3'>
                    <div className='register-header'>
                        <h1>
                            <span>Register Here</span>
                        </h1>
                    </div>
                    <div className='register-body flex flex-column align-items-center gap-3 '>
                        <div className='flex flex-row gap-4'>
                            <h3>First Name</h3>
                            <InputText type='text' />
                        </div>

                        <div className='flex flex-row gap-4'>
                            <h3>Second Name</h3>
                            <InputText type='text' />
                        </div>
                        <div className='flex flex-row gap-4'>
                            <h3>Email </h3>

                            <InputText type='mail' />
                        </div>
                        <div className='flex flex-row gap-4'>
                            <h3>Password</h3>
                            <InputText type='text' />
                        </div>
                        <div className='flex flex-row gap-4'>
                            <h3>
                                Confirm Password
                            </h3>
                            <InputText type='text' />
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                        <span>
                            I agree to Terms & Conditions
                        </span>
                    </div>
                    <div className='register-button'>
                        <Button type='button' label='Create Account'></Button>
                    </div>
                </div>
            </Card>

        </div>
    )
}

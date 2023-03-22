import React from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from "primereact/card"

export const PasswordRecover = () => {
    return (

        <Card style={{ width: '30rem', height: '25rem' }}>
            <div className='recover-pass-form flex flex-column gap-3'>
                <div className='recover-pass-title'>
                    <span style={{  fontSize: '30px' }}>
                        Recover Your Password
                    </span>
                </div>
                <div className="recover-pass-body flex flex-column "  >
                    <div className='flex flex-column gap-4'>
                        <div className="recover-pass flex flex-column gap-5">
                            <span className="p-input-icon-left">
                                <InputText type="text" placeholder="Type Your New Password" style={{ width: "290px", height: '60px' }} />
                            </span>
                            <span className="p-input-icon-left">
                                <InputText type="password" placeholder="Confirm New Password" style={{ width: "290px", height: '60px' }} />
                            </span>
                        </div>
                        <div className="recover-pass-button">
                            <Button style={{ width: '15rem' }} type="button" label="Set Password" severity="warning" ></Button>
                        </div>
                    </div>
                </div>
            </div>

        </Card>


    )
}

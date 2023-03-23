
import React from 'react';
import { Splitter as Splitterprime, SplitterPanel as SplitterPanelprime } from 'primereact/splitter';
// import { SlideMenu } from './SlideMenu'
import { Outlet } from "react-router-dom";

export const Splitter = () => {
    return (
        <Splitterprime style={{ height: '700px' }}>
            <SplitterPanelprime className="flex align-items-center justify-content-center" size={10} minSize={10}>
                {/* <SlideMenu /> */}
            </SplitterPanelprime>
            <SplitterPanelprime className="flex align-items-center justify-content-center" size={75}>
                <Outlet />
            </SplitterPanelprime>
        </Splitterprime>
    )
}

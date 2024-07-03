import React from 'react';
import EventNavigation from "./EventNavigation";
import {Outlet} from "react-router-dom";

const EventLayout = () => {
    return (
        <>
            <EventNavigation />
        {/*    자식들 불러오기 */}
            <Outlet />
        </>
    );
};

export default EventLayout;
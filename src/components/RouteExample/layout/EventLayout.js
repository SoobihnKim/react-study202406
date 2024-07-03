import React from 'react';
import EventNavigation from "./EventNavigation";
import {Outlet} from "react-router-dom";

const EventLayout = () => {
    return (
        <>
            <EventNavigation />
            <Outlet />
        {/*    자식들 불러오기 */}
        </>
    );
};

export default EventLayout;
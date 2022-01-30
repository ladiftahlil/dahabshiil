import React from 'react';
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
    {
        title:'Dashboard',
        path: '/',
        icon: <AiIcons.AiOutlineDashboard/>,
        cName: 'nav-text'
    },
    {
        title:'Query',
        path: '/query',
        icon: <AiIcons.AiOutlineFileSearch/>,
        cName: 'nav-text'
    },
    {
        title:'Register',
        path: '/register',
        icon: <AiIcons.AiOutlineUserAdd/>,
        cName: 'nav-text'
    },
    {
        title:'Profile',
        path: '/profile',
        icon: <AiIcons.AiOutlineProfile/>,
        cName: 'nav-text'
    },
    {
        title:'User',
        path: '/user',
        icon: <AiIcons.AiOutlineUserSwitch/>,
        cName: 'nav-text'
    },
]

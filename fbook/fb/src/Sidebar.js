import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow.js';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className = 'sidebar'>
            <SidebarRow scr = {user.photoURL} title = {user.displayName}/>
            <SidebarRow Icon = {EmojiFlagsIcon} title = 'Pages'/>
            <SidebarRow Icon = {StorefrontIcon} title = 'Marketplace'/>


        </div>
    )
}

export default Sidebar

import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "Sidebar.css";

function Sidebar() {
    return (
        <div className="home">
            <h2>This is the Sidebar!</h2>
            <div className="sidebar_top">
                <h3>Server Name</h3>
                <ExpandMoreIcon />
            </div>
        </div>
    )
}

export default Sidebar

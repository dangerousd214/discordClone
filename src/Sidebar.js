import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Sidebar.css";
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>This is the Sidebar!</h2>
            <div className="sidebar_top">
                <h3>Server Name</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar_channels">
                <div className="sidebar_channelsHeader">
                    <div className="sidebar_header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    {/* <AddIcon onClick={handleAddChannel} className="sidebar_addChannel" /> */}
                </div>
                <div className="sidebar_channelsList">
                    <SidebarChannel />
                </div>
                <div className="sidebar_voice">
                    <h4>Voice Channel</h4>
                <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large" />
                <div className="sidebar_voiceInfo"></div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

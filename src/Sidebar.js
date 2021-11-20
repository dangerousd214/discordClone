import React, { useEffect, useState} from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Sidebar.css";
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
 import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
 import CallIcon from "@material-ui/icons/Call";
import { Avatar } from '@material-ui/core';
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings'

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
                <div className="sidebar_voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar_voiceIcons"></div>
                <InfoOutlinedIcon />
                <CallIcon />
                </div>
                <div className="sidebar_profile">
                    <div className="sidebar_profileInfo">
                        <h3>DangerousD</h3>
                        <Avatar />
                        <p>id#</p> {/* id number will be given by firebase*/}
                    </div>
                    <div className="sidebar_profileIcons">
                        <MicIcon />
                        <HeadsetIcon />
                        <SettingsIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

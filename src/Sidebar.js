import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar className="avatar" />
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLargeIcon className="icons" />
					</IconButton>
					<IconButton>
						<ChatIcon className="icons" />
					</IconButton>
					<IconButton>
						<MoreVertIcon className="icons" />
					</IconButton>
				</div>
			</div>
			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<input placeholder="Search or start new chat" type="text" />
				</div>
			</div>
			<div className="sidebar__chats">
				<SidebarChat addNewChat />
				<SidebarChat />
			</div>
		</div>
	);
}

export default Sidebar;

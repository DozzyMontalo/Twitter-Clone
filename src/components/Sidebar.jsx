import React from "react";
import "./sidebar.css";
import SidebarOpt from "./SidebarOpt";

import {
  MailOutline,
  Search,
  Twitter,
  Home,
  NotificationsNone,
} from "@material-ui/icons";
import {
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  MoreHoriz,
} from "@material-ui/icons";
import Button from "@mui/material/Button";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarOpt Icon={Twitter} Active={true} />
      <SidebarOpt Text="Home" Icon={Home} Active={true} color="primary" />
      <SidebarOpt Icon={Search} Text="Explore" />
      <SidebarOpt Icon={NotificationsNone} Text="Notifications" />
      <SidebarOpt Icon={MailOutline} Text="Messages" />
      <SidebarOpt Icon={BookmarkBorder} Text="Bookmarks" />
      <SidebarOpt Icon={ListAlt} Text="Lists" />
      <SidebarOpt Icon={PermIdentity} Text="Profile" />
      <SidebarOpt Icon={MoreHoriz} Text="More" />
      <Button varient="outline" className="tweeter_button fullWidth">
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;

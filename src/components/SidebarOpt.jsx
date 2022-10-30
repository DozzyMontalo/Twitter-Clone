import React from "react";

const SidebarOpt = ({ Text, Icon, Active }) => {
  return (
    <div className={`sidebarOpt ${Active && "sidebarOpt_active"}`}>
      <Icon />
      <h2>{Text}</h2>
    </div>
  );
};

export default SidebarOpt;

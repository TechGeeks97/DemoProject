import { faGauge } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SidebarNavItem from "@/app/ui/dashboard/Sidebar/SidebarNavItem";

export default function SidebarNav() {
  return (
    <ul className="list-unstyled">
      <SidebarNavItem icon={faGauge} href="/">
        Side Bar Menus
      </SidebarNavItem>
    </ul>
  );
}

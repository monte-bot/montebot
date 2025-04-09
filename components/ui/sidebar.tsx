/** @format */
"use client";

import { useEffect, useState } from "react";
import { Nav } from "@/components/ui/nav";

type Props = {};

import {
  LogOut,
  LayoutDashboard,
  UsersRound,
  Settings,
} from "lucide-react";


import { useWindowWidth } from "@react-hook/window-size";

export default function Sidebar({ }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const onlyWidth = useWindowWidth();
  const [mobileWidth, setMobileWidth] = useState(onlyWidth < 768);

  useEffect(() => {
    setHasMounted(true);
    setMobileWidth(onlyWidth < 768);
  }, [onlyWidth]);

  if (!hasMounted) return null;

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
            variant: "ghost"
          },          
          {
            title: "Formulário",
            href: "/form",
            icon: UsersRound,
            variant: "ghost"
          },
          {
            title: "Configurações",
            href: "/settings",
            icon: Settings,
            variant: "ghost"
          },
          {
            title: "Logout",
            href: "/",
            icon: LogOut,
            variant: "ghost"
          }
        ]}
      />
    </div>
  );
}
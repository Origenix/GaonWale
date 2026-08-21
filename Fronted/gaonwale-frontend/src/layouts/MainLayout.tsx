import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { TopHeader } from "../components/layout/TopHeader";
import { BottomNavigation } from "../components/layout/BottomNavigation";
import { DesktopSidebar } from "../components/layout/DesktopSidebar";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { classNames } from "../utils/helpers";

export const MainLayout: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const { theme } = useTheme();

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div
      className={classNames(
        "min-h-screen",
        theme === "dark" ? "bg-[#050711]" : "bg-[#FAFAFE]",
      )}
    >
      <TopHeader onMenuClick={() => {}} />

      <div className="flex max-w-[1920px] mx-auto">
        <DesktopSidebar />

        <main className="flex-1 w-full pb-20 md:pb-0 overflow-x-hidden min-h-[calc(100vh-60px)]">
          <Outlet />
        </main>
      </div>

      <BottomNavigation />
    </div>
  );
};

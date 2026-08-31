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
    return <div className="grid min-h-dvh place-items-center bg-[var(--bg)] text-[var(--text)]">Loading...</div>;
  }

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <div className={classNames('min-h-dvh', theme === 'dark' ? 'bg-[#050711]' : 'bg-[#FAFAFE'])}>
      <TopHeader />
      <div className="mx-auto flex max-w-[1440px]">
        <DesktopSidebar />
        <main className="min-h-[calc(100dvh-56px)] min-w-0 flex-1 overflow-x-hidden pb-20 md:pb-0">
          <Outlet />
        </main>
      </div>
      <BottomNavigation />
    </div>
  );
};

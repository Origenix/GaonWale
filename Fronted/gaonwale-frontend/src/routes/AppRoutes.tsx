import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { AuthLayout } from '../layouts/AuthLayout';

// Lazy loading pages
const Onboarding = React.lazy(() => import('../pages/Onboarding').then(m => ({ default: m.Onboarding })));
const Login = React.lazy(() => import('../pages/Login').then(m => ({ default: m.Login })));
const Register = React.lazy(() => import('../pages/Register').then(m => ({ default: m.Register })));
const Home = React.lazy(() => import('../pages/Home').then(m => ({ default: m.Home })));
const Trending = React.lazy(() => import('../pages/Trending').then(m => ({ default: m.Trending })));
const Create = React.lazy(() => import('../pages/Create').then(m => ({ default: m.Create })));
const Chat = React.lazy(() => import('../pages/Chat').then(m => ({ default: m.Chat })));
const Communities = React.lazy(() => import('../pages/Communities').then(m => ({ default: m.Communities })));
const Profile = React.lazy(() => import('../pages/Profile').then(m => ({ default: m.Profile })));
const Services = React.lazy(() => import('../pages/Services').then(m => ({ default: m.Services })));
const Notifications = React.lazy(() => import('../pages/Notifications').then(m => ({ default: m.Notifications })));
const Search = React.lazy(() => import('../pages/Search').then(m => ({ default: m.Search })));
const PostDetail = React.lazy(() => import('../pages/PostDetail').then(m => ({ default: m.PostDetail })));
const StoryDetail = React.lazy(() => import('../pages/StoryDetail').then(m => ({ default: m.StoryDetail })));
const Settings = React.lazy(() => import('../pages/Settings').then(m => ({ default: m.Settings })));
const Feedback = React.lazy(() => import('../pages/Feedback').then(m => ({ default: m.Feedback })));
const Coins = React.lazy(() => import('../pages/Coins').then(m => ({ default: m.Coins })));
const Saved = React.lazy(() => import('../pages/Saved').then(m => ({ default: m.Saved })));
const MyPosts = React.lazy(() => import('../pages/MyPosts').then(m => ({ default: m.MyPosts })));
const MyGroups = React.lazy(() => import('../pages/MyGroups').then(m => ({ default: m.MyGroups })));
const Shop = React.lazy(() => import('../pages/Shop').then(m => ({ default: m.Shop })));
const Help = React.lazy(() => import('../pages/Help').then(m => ({ default: m.Help })));

const LoadingFallback = () => <div className="h-screen w-full flex items-center justify-center">Loading...</div>;

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding" replace />} />
        
        <Route element={<AuthLayout />}>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/create" element={<Create />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/search" element={<Search />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/story/:id" element={<StoryDetail />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="/my-groups" element={<MyGroups />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/help" element={<Help />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Suspense>
  );
};

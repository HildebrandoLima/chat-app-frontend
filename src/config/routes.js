import React from 'react';
import ChatPage from '../pages/chat/ChatPage';
import UserPage from '../pages/user/UserPage';
import UserUpdatePage from '../pages/user/UserUpdatePage';

export const routes = [
  { path: '/', component: <UserPage /> },
  { path: '/perfil', component: <UserUpdatePage /> },
  { path: '/chat/:from/:to', component: <ChatPage /> },
];
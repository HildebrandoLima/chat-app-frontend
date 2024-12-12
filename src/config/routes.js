import React from 'react';
import ChatPage from '../pages/chat/ChatPage';
import UserPage from '../pages/user/UserPage';

export const routes = [
  { path: '/', component: <UserPage /> },
  { path: '/chat/:from/:to', component: <ChatPage /> },
];
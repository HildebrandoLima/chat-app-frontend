import React from 'react';
import ChatPage from '../pages/chat/ChatPage';
import ChatCreatePage from '../pages/chat/ChatCreatePage';
import ChatUpdatePage from '../pages/chat/ChatUpdatePage';

export const routes = [
  { path: '/', component: <ChatPage /> },
  { path: '/registrar', component: <ChatCreatePage /> },
  { path: '/alterar/:id', component: <ChatUpdatePage /> },
];
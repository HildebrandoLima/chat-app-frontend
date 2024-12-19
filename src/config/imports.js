// Configuração do React
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

// Arquivos globais de configuração
import api from '../config/api';
import { routes } from '../config/routes';
import pusher from '../config/pusher';

// Repositórios
import ChatRepository from '../repositories/ChatRepository';
import UserRepository from '../repositories/UserRepository';

// Serviços
import ChatService from '../services/ChatService';
import UserService from '../services/UserSerivice';

// Componentes globais
import Button from '../../src/components/shared/Button';
import Header from '../../src/components/shared/Header';
import Modal from '../../src/components/shared/Modal';
import Spinner from '../../src/components/shared/Spinner';

// Componnetes pai de componentes filhos
import ChatFrom from '../../src/components/chat/ChatFrom';
import ChatList from '../../src/components/chat/ChatList';
import UserForm from '../../src/components/user/UserForm';
import UserList from '../../src/components/user/UserList';

// Hooks
import Chat from '../hooks/chat/Chat';
import User from '../hooks/user/User';
import UserUpdate from '../hooks/user/UserUpdate';

// Utilidades
import FormatTime from '../utils/formatTime/FormatTime';

export {
    Router,
    Routes,
    Route,
    Link,
    useNavigate,
    useParams,
    React,
    useState,
    useEffect,
    api,
    routes,
    pusher,
    ChatRepository,
    UserRepository,
    ChatService,
    UserService,
    Button,
    Header,
    Modal,
    Spinner,
    ChatFrom,
    ChatList,
    UserForm,
    UserList,
    Chat,
    User,
    UserUpdate,
    FormatTime,
};
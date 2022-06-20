import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from 'socket.io-client';
import { useLocation } from 'react-router-dom'
import './Chat.css';
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import OnlineUsers from "../OnlineUsers/OnlineUsers";

let socket;

const Chat = () => {
    const location = useLocation();
    const [users, setUsers] = useState("");
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:8000';
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);       
        
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, (error) => {
            if(error) {
                alert(error);
              }
        });
    },[ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
        socket.on("roomData", ({ users }) => {
            setUsers(users);
          });
    }, [messages])

    console.log(users);
    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);
    
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
            <OnlineUsers users={users}/>
        </div>
    )
}

export default Chat;
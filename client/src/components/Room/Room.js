import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
import './Room.css';

const Room = () =>{

    const location = useLocation();
    const [room, setRoom] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        const { name } = queryString.parse(location.search);       
        setName(name);
    },[location.search])

    const rooms = [
        { id: 1, roomName: "1.Room" },
        { id: 2, roomName: "2.Room" },
        { id: 3, roomName: "3.Room" },
        { id: 4, roomName: "4.Room" },
    ]

    const handleClick  = (event) => {
        setRoom(event.currentTarget.id);
        console.log(event.currentTarget.id);
    }

    return(
        <div className="textContainer2">          
                <div>
                    <h1>Rooms</h1>
                    {rooms.map((room) => (
                    <div key={room.id} className="roomContainer" id={room.id} onClick={handleClick}>
                        <h2>
                            {room.roomName}
                            
                        </h2>
                    </div>
                ))}
                </div>      
                <Link onClick={event => (!room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20">Join</button>
                </Link>
        </div>
        
    )
}


export default Room;
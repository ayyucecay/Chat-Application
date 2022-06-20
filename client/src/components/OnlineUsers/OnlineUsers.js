import React from "react";

import onlineIcon from '../../icons/onlineIcon.png';
import './OnlineUsers.css';

const OnlineUsers = ({users}) =>(
    <div className="textContainer">
        {users 
        ?      
        (
            <div >
                <h1>Active Users</h1>
                <div className="activeContainer">
                    <h2>
                        {users.map(({name, room}) => (
                            <div key={name} className="activeItem">
                                <img alt="Online Icon" src={onlineIcon}/>
                                {name}
                                
                            </div>
                    ))}
                    </h2>
                </div>
            </div>
            
        )
        : null
        }
        
    </div>
     
)


export default OnlineUsers;
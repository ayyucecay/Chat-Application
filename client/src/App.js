import React from 'react';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import Room from './components/Room/Room';


const App = () => (
    <Router>
        <Routes>
            <Route path='/' exact element={<Join/>} />
            <Route path='/rooms' exact element={<Room/>} />
            <Route path='/chat' element={<Chat/>} />
        </Routes>
    </Router>
)

export default App;
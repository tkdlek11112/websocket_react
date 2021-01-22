import React from 'react';
import WebSocketProvider from './websocket/WebSocketProvider';
import Chatting from './components/Chatting';
import TextInputBox from './components/TextInputBox';
import CommonHeader from "./components/CommonHeader";

function App() {
    return (
        <div className="App">
            <WebSocketProvider>
                <CommonHeader/>
                <Chatting />
                <TextInputBox />
            </WebSocketProvider>
        </div>
    );
}

export default App;
import React from 'react';
import WebSocketProvider from './websocket/WebSocketProvider';
import Chatting from './components/Chatting';
import TextInputBox from './components/TextInputBox';
import CommonHeader from "./components/CommonHeader";
import Approval from "./components/Approval";
import Message from "./components/Message";
import Fep from "./components/Fep";

function App() {
    return (
        <div className="App">
            <WebSocketProvider>
                <CommonHeader/>
                <Approval/>
                <Message/>
                <Fep/>
                <Chatting/>
                <TextInputBox/>
            </WebSocketProvider>
        </div>
    );
}

export default App;
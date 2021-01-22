import React, {useContext, useState} from "react";
import {WebSocketContext} from "../websocket/WebSocketProvider";

function Chatting() {
    const ws = useContext(WebSocketContext);
    const [items, setItems] = useState<string[]>([]);

    const addItem = (item: string) => {
        setItems([
            ...items,
            item
            ]
        );
    };

    ws.current.onmessage = (evt: MessageEvent) => {
        const { GrpcEchoRes} = require('../protos/data/SonaxMessage_pb.js');
        const data = evt.data
        const ret_bytes = Buffer.alloc(data.length);
        var encoder = new TextEncoder();

        encoder.encodeInto(data, ret_bytes);
        const ret = ret_bytes.subarray(10, data.length)

        var response_proto = GrpcEchoRes.deserializeBinary(ret);
        var msg = response_proto.getData().getStroutmsg();

        console.log(msg);
        addItem(data);
    };

    return (
        <ul>
            {
                items.map((message,index)=>{
                    return (
                        <li key={index}>{message}</li>
                    )
                })
            }
        </ul>
    );
}

export default Chatting;
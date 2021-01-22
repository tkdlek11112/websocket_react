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
        // console.log(evt);
        const { GrpcEchoRes,GrpcCommonHeader,GrpcApproval, GrpcFep, GrpcMessage } = require('../protos/data/SonaxMessage_pb.js');
        const response = new GrpcEchoRes();
        const data = evt.data
        // console.log(data.length);
        const ret_bytes = Buffer.alloc(data.length);
        var encoder = new TextEncoder;

        encoder.encodeInto(data, ret_bytes);
        // console.log(ret_bytes);
        const ret = ret_bytes.subarray(10, data.length)
        // for (var i = 10; i < data.length; i ++){
        //     console.log(data[i]);
        //
        //     ret_bytes[i-10] = btye(data[i]);
        // }
        //
        // console.log(ret_bytes);
        // const protodata = data.substring(10);
        var response_proto = GrpcEchoRes.deserializeBinary(ret);
        var msg = response_proto.getData().getStroutmsg();

        console.log(msg);
        addItem(data);
    };

    return (
        <ul>
            {
                items.map((message)=>{
                    return (
                        <li>{message}</li>
                    )
                })
            }
        </ul>
    );
}

export default Chatting;
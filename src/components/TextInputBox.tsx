import React, {useState, useContext} from "react";
import {WebSocketContext} from "../websocket/WebSocketProvider";

function stringToUint(str: any) {
    var string = btoa(unescape(encodeURIComponent(str))),
        charList = string.split(''),
        uintArray = [];
    for (var i = 0; i < charList.length; i++) {
        uintArray.push(charList[i].charCodeAt(0));
    }
    return new Uint8Array(uintArray);
}

function concatTypedArrays(a : any, b : any) { // a, b TypedArray of same type
    var c = new (a.constructor)(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}

function concatBuffers(a : any, b : any) {
    return concatTypedArrays(
        new Uint8Array(a.buffer || a),
        new Uint8Array(b.buffer || b)
    ).buffer;
}

function TextInputBox(){
    const [message, setMessage] = useState("");
    const ws = useContext(WebSocketContext);

    const handleChangeText = (e: any) => {
        setMessage(e.target.value);
    }
    const handleClickSubmit = () => {
        ws.current.send(JSON.stringify({
            chat: message
        }))

        setMessage('');
    }

    const { GrpcEchoReq,GrpcCommonHeader,GrpcApproval, GrpcFep, GrpcMessage } = require('../protos/data/SonaxMessage_pb.js');
    console.log('data'  );
    console.log(GrpcEchoReq.GrpcEchoIn);
    const protoSubmit = () =>{
        const request = new GrpcEchoReq();
        const test = new GrpcEchoReq.GrpcEchoIn(['hiaa']);
        const commonHeader = new GrpcCommonHeader();
        commonHeader.setThIfTcd("0");
        const fep = new GrpcFep();
        const message = new GrpcMessage();
        console.log('button'  );
        request.setCommonHeader(commonHeader);
        // request.setApproval(approval);
        // request.setFep(fep);
        // request.setMessage(message);
        request.setData(test);
        console.log('root' + request);
        const bytes = request.serializeBinary();
        console.log(bytes);
        const data = bytes.toString();

        console.log(data);
        const bytes22 = 'ORDER00001';
        const bytes33 = stringToUint(bytes22)
        console.log(bytes33);
        console.log('byte' + request.byte)
        console.log('obj' + request.toObject());
        const a = Buffer.alloc(23);
        a.fill('ORDER00001');
        for (var i = 10; i < 23; i++){
            a[i] = bytes[i-10];
        }

        ws.current.send(a);
    }

    const InvestSubmit = () =>{
        const { GrpcCommonHeader, Invest0025Req } = require('../protos/data/INVEST0025_pb.js');

        const request = new Invest0025Req();
        const test = new Invest0025Req.Invest0025In(['hello','world']);
        const commonHeader = new GrpcCommonHeader();
        commonHeader.setThIfTcd("T");
        request.setCommonHeader(commonHeader);
        // request.setApproval(approval);
        // request.setFep(fep);
        // request.setMessage(message);
        request.setData(test);
        console.log('root' + request);
        const bytes = request.serializeBinary();
        console.log(bytes);
        const data = bytes.toString();

        console.log(data);
        const bytes22 = 'INVEST0025';
        const bytes33 = stringToUint(bytes22)
        console.log(bytes33);
        console.log('byte' + request.byte)
        console.log('obj' + request.toObject());
        const a = Buffer.alloc(31);
        a.fill('INVEST0025');
        for (var i = 10; i < 31; i++){
            a[i] = bytes[i-10];
        }

        ws.current.send(a);
    }

    return (
        <div>
            <input type="text" value={message} onChange={handleChangeText}></input>
            <button type="button" onClick={handleClickSubmit}>Send!</button>
            <button type="button" onClick={protoSubmit}>proto echo Send!</button>
            <button type="button" onClick={InvestSubmit}>proto invest Send!</button>
        </div>
    )
}
export default TextInputBox;
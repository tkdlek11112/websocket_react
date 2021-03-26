import React, {useState, useContext} from "react";
import {WebSocketContext} from "../websocket/WebSocketProvider";
import {postSectorGroup} from "../apis/ApiTest"

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


    const protoSubmit = () =>{
        const { SubScribe, CommonHeader } = require('../protos/data/SubScribe_pb.js');
        const request = new SubScribe();
        const test = new SubScribe.SubScribeIn(['reserve','S30',['330590',]]);
        const commonHeader = new CommonHeader();
        commonHeader.setThTrTcd(0);
        commonHeader.setThIfTcd("Z");
        request.setCommonHeader(commonHeader);
        request.setDataList([test,]);
        console.log('root' + request);
        const bytes = request.serializeBinary();
        console.log(bytes.length);
        const total_length = 77 + bytes.length;
        const a = Buffer.alloc(total_length);
        a.fill('AxxZPTS20210316112354321876857368372AxxxxxxxxxxLogin                   xxxxxx');
        for (var i = 77; i < total_length; i++){
            a[i] = bytes[i-77];
        }
        ws.current.send(a);
    }

    const protoLoginSubmit = () =>{
        const { LoginReq, CommonHeader } = require('../protos/data/Login_pb.js');
        const request = new LoginReq();
        const test = new LoginReq.LoginIn(["testtoken",]);
        const commonHeader = new CommonHeader();
        commonHeader.setThTrTcd('S');
        commonHeader.setThIfTcd("U");
        request.setCommonHeader(commonHeader);
        request.setData(test);
        console.log('root' + request);
        const bytes = request.serializeBinary();
        console.log(bytes.length);

        const total_length = 77 + bytes.length;
        const a = Buffer.alloc(total_length);
        a.fill('S' + // S, R, A, B
            'xx' + // reserved
            'U' +  // Z: MCI
            'PTS20210316112354321876857368372' + // GUID
            'Axxxxxxxxxx' + // os info
            'Login                   ' + // TR ID
            'x' + // Error Code
            'xxxxx' // Error Message Code
        );
        for (var i = 77; i < total_length; i++){
            a[i] = bytes[i-77];
        }

        ws.current.send(a);
    }

    const sonat_submit = () =>{
        const { GrpcSpotNewOrdReq,GrpcCommonHeader } = require('../protos/data/SonatMessage_pb.js');

        const request = new GrpcSpotNewOrdReq();
        const test = new GrpcSpotNewOrdReq.GrpcSpotNewOrdIn(['01201000002','0423','KR7005930003',"100", "64700", "2", '00']);

        const commonHeader = new GrpcCommonHeader();
        commonHeader.setThIfTcd("0");
        request.setCommonHeader(commonHeader);
        request.setData(test);
        console.log('root' + request);
        const bytes = request.serializeBinary();
        console.log(bytes);
        const data = bytes.toString();

        console.log(data);
        const bytes22 = 'ORDER00002';
        const bytes33 = stringToUint(bytes22)
        console.log(bytes33);
        console.log('byte' + request.byte)
        console.log('obj' + request.toObject());
        const a = Buffer.alloc(69);
        a.fill('ORDER00002');
        for (var i = 10; i < 69; i++){
            a[i] = bytes[i-10];
        }

        ws.current.send(a);
    }

    const invest0025_submit = () =>{
        const { GrpcCommonHeader, Invest0025Req } = require('../protos/data/INVEST0025_pb.js');

        const request = new Invest0025Req();
        const test = new Invest0025Req.Invest0025In(['hello','world']);
        const commonHeader = new GrpcCommonHeader();
        commonHeader.setThIfTcd("T");
        request.setCommonHeader(commonHeader);
        request.setData(test);
        console.log('root' + request);
        const bytes = request.serializeBinary();
        console.log(bytes.length);
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

    const sectorGroup_submit = () => {
        const ret = postSectorGroup();
        ret.then((data)=>{
            console.log(data);
        });

    }

    return (
        <div>
            <input type="text" value={message} onChange={handleChangeText}></input>
            <button type="button" onClick={handleClickSubmit}>Send!</button>
            <button type="button" onClick={protoSubmit}>proto echo Send!</button>
            <button type="button" onClick={protoLoginSubmit}>proto Login Send!</button>
            <button type="button" onClick={sonat_submit}>proto trade Send!</button>
            <button type="button" onClick={invest0025_submit}>proto invest Send!</button>
            <button type="button" onClick={sectorGroup_submit}>rest SectorGroup</button>
        </div>
    )
}
export default TextInputBox;

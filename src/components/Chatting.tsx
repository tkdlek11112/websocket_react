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
    const { GrpcEchoRes} = require('../protos/data/SonaxMessage_pb.js');
    const { GrpcSpotNewOrdRes} = require('../protos/data/SonatMessage_pb.js');
    const { Invest0025Res} = require('../protos/data/INVEST0025_pb.js');

    ws.current.onmessage = (evt: MessageEvent) => {
        console.log('수신');
        console.log(evt);
        const data = evt.data
        const tr_number = data.substr(0,10)
        const byte_length = (new TextEncoder().encode(data)).length
        console.log('길이');
        console.log(byte_length);
        const ret_bytes = Buffer.alloc(byte_length);
        const encoder = new TextEncoder();
        encoder.encodeInto(data, ret_bytes);
        console.log('바이트변환');
        console.log(ret_bytes);
        const ret = ret_bytes.subarray(10, byte_length);
        console.log(ret);

        if(tr_number == 'ORDER00001'){
            console.log(tr_number);
            const response_proto = GrpcEchoRes.deserializeBinary(ret);
            console.log(response_proto);
            const msg = response_proto.getData().getStroutmsg();
            console.log(msg);
            addItem("서비스 : " + tr_number + ", strOutMsg : " + msg);



        }else if(tr_number =='ORDER00002'){
            console.log(tr_number);
            const response_proto = GrpcSpotNewOrdRes.deserializeBinary(ret);
            console.log(response_proto);
            const ordno = response_proto.getData().getOrdno();
            const ordPtnCode = response_proto.getData().getOrdptncode();
            const shtnIsuNo = response_proto.getData().getShtnisuno();
            const ordAmt = response_proto.getData().getOrdamt();
            const acntNm = response_proto.getData().getAcntnm();
            const isuNm = response_proto.getData().getIsunm();
            addItem("서비스 : " + tr_number +
                ", ordno : " + ordno +
                ", ordPtnCode : " + ordPtnCode +
                ", shtnIsuNo : " + shtnIsuNo +
                ", ordAmt : " + ordAmt +
                ", acntNm : " + acntNm +
                ", isuNm : " + isuNm);


        }else if(tr_number =='INVEST0025'){
            console.log(tr_number);
            const response_proto = Invest0025Res.deserializeBinary(ret);
            console.log(response_proto);
            const exg_cod = response_proto.getData().getExgCod();
            const exg_nm = response_proto.getData().getExgNm();
            const item_cod = response_proto.getData().getItemCod();
            const item_nm = response_proto.getData().getItemNm();
            const df_rt = response_proto.getData().getDfRt();
            const crd_rt = response_proto.getData().getCrdRt();
            const stk_crpr = response_proto.getData().getStkCrpr();
            const updn_r = response_proto.getData().getUpdnR();
            const mkt_exn_updn_r = response_proto.getData().getUpdnR();
            const atnt_regi_c = response_proto.getData().getAtntRegiC();
            addItem("서비스 : " + tr_number +
                ", exg_cod : " + exg_cod +
                ", exg_nm : " + exg_nm +
                ", item_cod : " + item_cod +
                ", item_nm : " + item_nm +
                ", df_rt : " + df_rt +
                ", stk_crpr : " + stk_crpr +
                ", updn_r : " + updn_r +
                ", mkt_exn_updn_r : " + mkt_exn_updn_r +
                ", atnt_regi_c : " + atnt_regi_c);
        }

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
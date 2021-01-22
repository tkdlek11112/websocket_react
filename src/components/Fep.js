import React, {useState} from 'react';
import './CommonHeader.css';
import DataInput from './DataInput';

function Fep(){
    const [Fep, setFep] = useState({
        fep_chan_id:"", //FEP에서 정의한 대외기관 채널ID (대외기관 코드 + 회선정보)
        fep_if_id:"",   //FEP 호출을 위한 FEP 인터페이스ID
        fep_if_proc_id:"",  //타발거래시 Async 응답 수신할 송신 측의 서비스 코드
        fep_tr_node_no:"",  //FEP 노드번호
        fep_resp_tr_id:"",  //당발 거래시 Async 응답 수신할 전문헤더거래ID
        fep_tr_tmer_key_val:"" //당발 거래시 Async 응답 처리되는 계정계 타이머 키값
    });

    const handleChangeText = (e) => {
        setFep({
            ...Fep,
            [e.target.id]:e.target.value
        });
    }
    console.log(Fep);
    console.log(Object.keys(Fep));

    return (
        <>
            <h1> Fep </h1>
            <div className="div_border">
                {Object.keys(Fep).map( (item,index) =>(
                    <DataInput item={item} onChange={handleChangeText} state={Fep} key={index}></DataInput>
                ))}
            </div>
        </>
    );
}

export default Fep;
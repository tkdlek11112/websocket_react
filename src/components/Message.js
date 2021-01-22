import React, {useState} from 'react';
import './CommonHeader.css';
import DataInput from './DataInput';

function Message(){
    const [Message, setMessage] = useState({
        th_msg_oput_tcd:"", //전문헤더메시지출력구분코드 (0: 메시지바, 1: 팝업)
        msg_cod:"", //메시지코드
        msg_cn:"",  //메시지내용(대고객 메시지 처리)
        th_cusr_fild_nm:"" //전문헤더커서필드명
    });

    const handleChangeText = (e) => {
        setMessage({
            ...Message,
            [e.target.id]:e.target.value
        });
    }
    console.log(Message);
    console.log(Object.keys(Message));

    return (
        <>
            <h1> Message </h1>
            <div className="div_border">
                {Object.keys(Message).map( (item,index) =>(
                    <DataInput item={item} onChange={handleChangeText} state={Message} key={index}></DataInput>
                ))}
            </div>
        </>
    );
}

export default Message;
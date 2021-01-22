import React, {useState} from 'react';
import './CommonHeader.css';
import DataInput from './DataInput';

function Approval(){
    const [Approval, setApproval] = useState({
        mgr_apv_ocur_yn:"", //책임자승인발생여부 ("Y" : 발생, "N" : 미발생)
        rspp_apv_prc_yn:"", //책임자승인처리여부 ("Y" : 승인, "N" : 미승인)
        mgr_apv_no:""  //책임자승인번호
    });

    const handleChangeText = (e) => {
        setApproval({
            ...Approval,
            [e.target.id]:e.target.value
        });
    }
    console.log(Approval);
    console.log(Object.keys(Approval));

    return (
        <>
            <h1> Approval </h1>
            <div className="div_border">
                {Object.keys(Approval).map( (item,index) =>(
                    <DataInput state={Approval} item={item} onChange={handleChangeText} key={index}></DataInput>
                ))}
            </div>
        </>
    );
}

export default Approval;
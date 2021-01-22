import React, {useState} from 'react';
import './CommonHeader.css';
import DataInput from './DataInput';

function CommonHeader(){
    const [CommonHeader, setCommonHeader] = useState({
        th_tr_tcd:"",  // 거래 유형 정보 ("S" : 요청전문, "R" : 응답전문)
        th_if_tcd:"",   // 호출하고자 하는 대상(TARGET) 시스템 ID ("0" : 계정계, "1" : 정보계, "2" : 계정계배치, "3" : 정보계배치, "4" : FEP)
        th_src_if_tcd:"",   //호출(SOURCE) 시스템 ID ("0" : 계정계, "1" : 정보계, "2" : 계정계배치, "3" : 정보계배치, "4" : FEP)
        mgr_apv_c:"",   //책임자승인부 전체건수
        guid:"",    //Global ID (전문생성채널구분코드(3) + yyyyMMddHHmmssSSS(17) + 자체랜덤값생성(12))
        th_tr_id:"",    //거래단위를 구분하는 키 값
        th_scr_no:"",   //거래를 호출한 대표 화면번호(8)
        th_tr_resp_tcd:"",  //요청받은 거래 처리결과 값 ("0" : 정상처리, "1" : 시스템오류, "2" : Application 오류, "3" : Dummy 리턴, "4" : 응답 개별부가 존재하는Application 오류, "5" : 서비스는 무조건 롤백처리하지만 응답 개별부 존재(시뮬레이션 거래))
        th_cont_tr_tcd:"",  //연속거래여부
        th_qry_c:"",   //한번의 거래로 조회할 레코드 건수
        th_dum_tr_tcd:"", //더미거래 여부 지정	(0:일반거래, 1:더미거래)
        th_tr_dt:"",   //시스템일자
        th_tr_dl_tmd:"",   //시스템 거래시각
        th_sys_tcd:"", //개발,테스트,운영 시스템 구분 ("D": 개발, "T": 테스트, "P": 운영, "L": 로컬)
        th_tr_ccd:"",  //거래구분코드 (개발자 필요 용도에로 사용됨 Q:Query, C:Insert, U:Update, D:Delete, R:Report(출력))
        th_biz_dt:"",  //서버에서 관리하는 영업일자
        th_btn_auth_tcd:"",    //화면 내 버튼 권한을 나타내는 구분코드 - 화면에서 요청이 올라올때(매체구분:011)만 유효함
        mda_tcd:"",    //거래발생 매체구분  (011 : 통합단말(직원), P10 : Kakao Pay 공통(고객, 계좌), P20 : Kakao Pay 머니(출납), P30 : Kakao Pay 투자(수익증권))
        onln_user_id:"",   //접속사용자ID
        blng_dept_cod:"",  //조작자 소속 부서코드
        th_pwd_er_nc_inc_yn:"",    //전문헤더비밀번호오류횟수증가여부
        th_ac_pwd_cfmt_tcd:"", //전문헤더계좌비밀번호확인구분코드
        user_grp_auth_tcd:"",  //사용자별로 접근가능 데이터권한 등급별로 부여한 코드 (10 : 해당점, 20 : 해당점 + 영업점, 30 : 해당점+CYBER지점, 40 : 해당점+전지점, 50 : 본사+전지점)
        wrk_tmnl_id:"",    //작업단말ID
        th_conn_loc_tcd:"",    //전문헤더접속위치구분코드 ("I" : 내부, "O" : 외부)
        th_mac_adr:"", //전문헤더MAC주소
        th_ip_tcd:"",  //전문헤더IP구분코드 ("0": IP4, "1": IP6)
        th_conn_pbip_adr:"",   //단말의 공인 IP - FDS에서 활용
        th_conn_prip_adr:"",   //단말의 사설 IP - FDS에서 활용
        cont_trkey:"", //연속거래키
        fds_mobl_dvc_idfy:""  //모바일장치식별자 - Android : IMEI(15), iOS : UUID(32) '-' 제외
    });

    const handleChangeText = (e) => {
        setCommonHeader({
            ...CommonHeader,
            [e.target.id]:e.target.value
        });
    }
    console.log(CommonHeader);
    console.log(Object.keys(CommonHeader));

    return (
        <>
            <h1> COMMON HEADER</h1>
            <div className="div_border">
            {Object.keys(CommonHeader).map( (item, index) =>(
                    <DataInput item={item} state={CommonHeader} onChange={handleChangeText} key={index}></DataInput>
                ))}
            </div>
        </>
    );
}

export default CommonHeader;
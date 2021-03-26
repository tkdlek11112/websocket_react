import axios from "axios";

export async function postSectorGroup(){
    const response = await axios.post(
        'https://test20.neoredbull.com/insight/open-ranking', {
            common_header:{
                th_tr_tcd:"S",
                th_if_tcd:"T",
                th_tr_id:"SectorGroup"
            },
            data:{
                nation_division_code:"123"
            }
        },{ withCredentials: true });
    return response.data;
}

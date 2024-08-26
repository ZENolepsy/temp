// 자바스크립트 코드 작성

// 현재 시간을 08.06 10:49:22 인 문자열로 만들어서 리턴해주는 함수
function getTime(){
    let date = new Date();

    let v_month = date.getMonth() + 1 + "";
    let v_date = date.getDate() + "";
    let v_hour = date.getHours() + "";
    let v_min = date.getMinutes() + "";
    let v_sec = date.getSeconds() + "";

    let v_result = v_month.padStart(2, '0');
    v_result += "." + v_date.padStart(2, '0');
    v_result += " " + v_hour.padStart(2, '0');
    v_result += ":" + v_min.padStart(2, '0');
    v_result += ":" + v_sec.padStart(2, '0');
    return v_result;
}
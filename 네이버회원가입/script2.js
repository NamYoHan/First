// ========================= ID 유효성검사 =========================
function IdChk() {
    //아이디 박스에대한 아이디 가져오기
    var objId = document.getElementById("id");
    //아이디 에러출력부분 아이디 가져오기
    var erid = document.getElementById("id_error");
    //아이디 정규식 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다
    var idreg = /^[a-z0-9]{5,20}$/;



    //objID 값이 공백이면 필수항목을 출력한다. 
    if (objId.value == '') {

        erid.innerHTML = "필수항목입니다.."
    }
    //정규식에 부합하면 "멋진아이디세요"
    // 부합하지 않으면 "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다"
    else {
        if (idreg.test(objId.value)) {
            erid.innerHTML = "멋진 아이디네요!"
            erid.style.color = "green"

        }
        else {
            erid.innerHTML = "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다"
        }

    }
}


// ========================= PASSWORD 유효성검사 =========================

function PwChk() {
    //비밀번호 아이디 가져오기
    let objPwd = document.getElementById("pw");
    //비밀번호 에러메세지 아이디 가져오기
    let erpw = document.getElementById("pw_error");
    //8~16자의 영문 대 소문자, 숫자, 특수문자를가 포함된 것"
    let reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

    // 비밀번호 값이 공백이면 "필수항목입니다."
    if (objPwd.value == '') {

        erpw.innerHTML = "필수항목입니다.."
    }
    // 비밀번호 값이 정규식에 부합하면 "멋진 비밀번호네요!"
    // 부합하지않으면 "Password는 8~16자의 영문 대 소문자, 숫자, 특수문자를 사용하세요"
    else {
        if (reg.test(objPwd.value)) {
            erpw.innerHTML = "멋진 비밀번호네요!"
            erpw.style.color = "green";
            

        }
        else {
            erpw.innerHTML = "Password는 8~16자의 영문 대 소문자, 숫자, 특수문자를 사용하세요"
        }

    }
}

//  ========================= PASSWORD 재확인검사 =========================


function RepwChk() {
    //비밀번호 비교할 아이디 가져오기 
    let objPwd = document.getElementById("pw");
    //비밀번호 재확인 아이디 가져오기
    let objPwd2 = document.getElementById("repw");
    //비밀번호 재확인 에러출력부분
    let errepw = document.getElementById("repw_error");

    
    // 비밀번호와 재확인번호가 일치하면 공백
    // 일치하지않으면 "비밀번호가 일치하지 않습니다."
    if (objPwd.value == objPwd2.value) {
        errepw.innerHTML = ""

    }
    else {
        errepw.innerHTML = "비밀번호가 일치하지 않습니다."
    }

}
// ========================= Name 에러검사 =========================
function NameChk() {
    //이름에 대한 아이디 가져오기
    let objName = document.getElementById("name");
    //이름 에러출력부분 아이디 가져오기
    let ername = document.getElementById("name_error");
    //정규식 한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)"
    let namereg = /^[가-힣a-zA-Z]+$/;

    // 이름이 공백이면 "필수항목입니다." 출력

    if (objName.value == '') {

        ername.innerHTML = "필수항목입니다.."
    }
    // 정규식에 부합하면 "멋진 이름이네요!" 출력
    // 아니면 "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)"
    else {
        if (namereg.test(objName.value)) {
            ername.innerHTML = "멋진 이름이네요!"



        }
        else {
            ername.innerHTML = "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)"
        }

    }
}

// ========================= email 에러검사 =========================
function EmailChk() {
    //이메일에대한 아이디 가져오기
    let objEmail = document.getElementById("email");
    //이메일 에러출력부분 아이디가져오기 
    let eremail = document.getElementById("email_error");
    // 정규식 xx@xxx.com
    let emailreg = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    // 이메일 정규식에 부합하면 공백
    // 부합하지않으면 "이메일 주소를 다시 확인해주세요"출력
    if (emailreg.test(objEmail.value)) {
    }
    else {
        eremail.innerHTML = "이메일 주소를 다시 확인해주세요"
    }
}


// // ========================= 전화번호 에러검사 ========================//

function PhonChk() {
    //전화번호 아이디 가져오기 
    let objPhon = document.getElementById("tel");
    // 전화번호 에러출력부분 아이디 가져오기
    let erphon = document.getElementById("phon_error");
    // 정규식 00000000000
    let phonreg = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;
    // 정규식 000-0000-0000
    var phonreg2 = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/;

    // 첫번째 정규식에 부합하면 공백
    if (phonreg.test(objPhon.value)) {
        erphon.innerHTML = ""
    }
    // 두번째 정규식에 부합하면 공백
    // 아니면 "전화번호를 다시 확인해주세요"
    else {
        if (phonreg2.test(objPhon.value)) {
            erphon.innerHTML = ""
        }
        else {
            erphon.innerHTML = "전화번호를 다시 확인해주세요"
        }
    }

}
// ========================= 생년월일 에러검사 =========================
function BirthChk() {
    //생년월일 중 ("연도") 아이디 가져오기
    let objBirth1 = document.getElementById("birthday1").value;

    // 생년월일 중 ("월") 아이디 가져오기
    let objBirth2 = document.getElementById("birthday2");
    let objBirth22 = (objBirth2.options[objBirth2.selectedIndex].value);



    //생년월일 중 ("일") 아이디 가져오기
    let objBirth3 = document.getElementById("birthday3").value;
    //전화번호 에러출력부분 아이디 가져오기
    let erbirth = document.getElementById("birth_error");

    // 연도가 4자리수일때 년도범위문으로 
    if (objBirth1.length == 4) {
        // 년도범위가 1923~2023일때 월 범위문으로
        if ((objBirth1 > 1900) && (objBirth1 < 2023)) {
            // 월범위문이 1~12월일때 일 범위문으로
            if ((objBirth22 > 0) && (objBirth22 < 13)) {
                // ("일")자리수 2자리일때 일 범위문으로
                if (objBirth3.length == 2) {
                    // 모든 규칙이 정상일때 공백
                    if(objBirth3>0&&objBirth3<32){
                        erbirth.innerHTML = ""
                    }
                    // 일 범위가 안맞을때 "생년월일을 다시 확인해주세요." 출력
                    else{
                        erbirth.innerHTML = "생년월일을 다시 확인해주세요."
                    }
                }
                // ("일")자리수가 2자리가 아닐때 "태어난 일(날짜) 2자리를 정확하게 입력하세요." 출력
                else {

                    erbirth.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요."
                }

            }
            // 월범위에서 벗어났을때 "정확한 월을 입력해주세요" 출력
            else {
                erbirth.innerHTML = "정확한 월을 입력해주세요"

            }

        }
        // 연도가 4자리수가 아닐때 "태어난 년도 4자리를 정확하게 입력하세요." 출력
        else if ((objBirth1 < 1900)) {
            // 년도가 너무 작을 때 "정말이세요?" 출력
            erbirth.innerHTML = "정말이세요?"
        }
        // 아닐경우 "미래에서 오셨군요. ^^"출력
        else {
            erbirth.innerHTML = "미래에서 오셨군요. ^^"
        }
    }
}

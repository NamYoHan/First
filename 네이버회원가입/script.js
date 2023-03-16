// 전체선택 버튼 체크클릭시 나머지 부분선택 버튼들도 체크되는 함수 
function CheckValueAll() {
    // 전체선택 버튼 가져옴
    const checkAll = document.querySelector('.checkAll');
    // 부분선택 버튼 전부 배열로 들어옴
    const chkbox = document.querySelectorAll('.chkbox');

    // 만약에 전체선택버튼이 체크되어있다면
    if (checkAll.checked == true) {
        // 부분선택 버튼를 체크로 바꾸는 반복문
        for (var i = 0; i < chkbox.length; i++) {
            chkbox[i].checked = true;
        }
        // 전체선택 버튼이 체크되어있지않다면 부분선택 버튼 모두 해제
    } else {
        for (var i = 0; i < chkbox.length; i++) { chkbox[i].checked = false; }
    }
}


//모두 체크되어있을시 부분선택버튼 하나라도 해제되면 전체선택버튼 체크해제
// 부분선택 버튼이 모두체크시 전체버튼 체크
function CheckValues()  {
    // 부분 선택버튼
    const checkboxes  = document.querySelectorAll('input[name="ChkButton"]');
    // 부분 선택버튼 중 체크되어있는 버튼 모두 가져옴
    const checked  = document.querySelectorAll('input[name="ChkButton"]:checked');
    // 전체 선택 버튼
    const selectAll = document.querySelector('input[name="ChkButtonAll"]');
    // 현재선택된 부분선택버튼 길이와 변수 부분선택 체크버튼숫자가 같다면 모든선택버튼 체크
    if(checkboxes.length === checked.length)  {
      selectAll.checked = true;
    // 아니면 모든선택버튼 체크해제
    }else {
      selectAll.checked = false;
    }
  
  }


  function submit(){
    if((document.getElementById("chk1").checked==true)&&document.getElementById("chk2").checked==true)
    location.href='NextNaver.html';

   
    else{
      alert("필수 항목을 체크 해주세요.")
    }

     
    }




  














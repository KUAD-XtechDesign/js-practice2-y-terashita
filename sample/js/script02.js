$(function(){

    let hako = 0;

    function checkBox(){
        if(hako > 5){
            $("#content").text(hako+"個入っています。箱はいっぱいです。箱を空にします。");
            /*$("#content").addClass('full');*/
            hako = 0;

        }else if(hako <= 0){
            hako = 0;
            $("#content").text(hako+"個。入っていません。");
            /*$("#content").removeClass().addClass('empty')*/;
        }else{
            $("#content").text(hako+"個入っています。まだ入ります。");
            /*$("#content").removeClass();*/
        }
    }

    $("#button01").on("click",function(){
            checkBox();
    })

    $("#button02").on("click",function(){
            hako = hako + 1;
            checkBox();
    })

    $("#button03").on("click",function(){
            hako = hako - 1;
            checkBox();
    })

})
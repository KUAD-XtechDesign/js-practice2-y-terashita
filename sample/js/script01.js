$(function(){

    let txt1 = "おはようございます！";
    let txt2 = "お元気ですか？";
    let num1 = 20;
    let num2 = 32;

    function sayHallo(){
        /*何か処理*/
        $("#content").text("こんにちは！");
    }

    function saySomething(txt){
        $("#content").text(txt);
    }

    function samTwo(t1,t2){
        /*samTow(arg1,arg2){*/
        $("#content").append(t1 + t2);
        /*.text(arg1 + arg2);*/
    }

    $("#button01").on("click",function(){
        sayHallo();
    })

    $("#button02").on("click",function(){
        saySomething(txt1);
    })

    $("#button03").on("click",function(){
        /*$("#content").text(text1 + text2);*/
        samTwo(txt1,txt2);
    })

    $("#button04").on("click",function(){
        /*$("#content").text(num1 + num2);*/
        samTwo(num1,num2);
    })

    $("#button05").on("click",function(){
        /*num1 = num1 + 10
         $("#ball").css("margin-left",num1 + 'px')
        */
        samTwo(txt1,txt2);
        samTwo(num1,num2);
    })

})
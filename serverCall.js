function fnSendReq(m,u ,a,b){
    var httpObj=new XMLHttpRequest();
        httpObj.open(m,u,true);
        httpObj.send();
        httpObj.onload=function(){
            debugger;
            var res=httpObj.responseText;
            res=JSON.parse(res);
            a(res);
        }
        httpObj.onerror=function(){
            debugger;
            b('something went wrong');
        }
}
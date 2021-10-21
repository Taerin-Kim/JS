function solution(n)
{
    var answer = String(n);


    console.log(answer)
    var res = 0;
    for(var i = 0; i< answer.length; i++){
        res += Number(answer[i]);
    }

    return res;
}

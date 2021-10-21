function solution(n) {
    var sum = '';
    for (var i = 0; i < n; i++){
        if (i%2 == 0){
            sum = sum + "수";
        } else {
            sum = sum + "박";
        }
    }

    return sum;
}

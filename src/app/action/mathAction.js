export function calc(op , num1, num2) {
    var ans=0;
    switch(op){
        case "ADD":
            ans = num1 + num2;
            break;
        case "SUBS":
            ans = num1 - num2;
            break;
    }

    return {
        type: op,
        payload: ans
    }
}

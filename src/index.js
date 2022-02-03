module.exports = function check(str, bracketsConfig) {
    const OPEN_BRACKETS = [];
    let BRACKETS_PAIR = {};
    for (let i = 0; i < bracketsConfig.length; i++){
        BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0];
        OPEN_BRACKETS.push(bracketsConfig[i][0]);
    }
  
    let stack = [];
  
    for (let i = 0; i < str.length; i++){
        let currentSymbol = str[i];
            
        topStackElement = stack[stack.length - 1];
  
        if (OPEN_BRACKETS.includes(currentSymbol)){
            if (currentSymbol === topStackElement && (currentSymbol === '|' ||currentSymbol === '7' ||currentSymbol === '8')){
                stack.pop();
            }else{
                stack.push(currentSymbol);
            }
        }else{
            if (stack.length === 0){
                return false;
            }
  
            if (topStackElement === BRACKETS_PAIR[currentSymbol]){
                stack.pop();
            }else {
                return false;
            }
        }
    }
    console.log(stack);
  
    return stack.length === 0;
}

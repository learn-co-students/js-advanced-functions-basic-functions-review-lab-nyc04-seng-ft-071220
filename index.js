// Your code here
const saturdayFun = (activity = "roller-skate") => `This Saturday, I want to ${activity}!`
const mondayWork = (activity = "go to the office") => `This Monday, I will ${activity}.`
const wrapAdjective = (string = '*') => {
    return function(param = "special") {
        return `You are ${string}${param}${string}!`;
    }
}

const Calculator = {
    add : function(a,b){
       return a+b
    },
    subtract : function(a,b){
        return a-b
     },
     multiply : function(a,b){
        return a*b
     },
     divide : function(a,b){
        return a/b
     }}

    let actionApplyer = function(int,arr){
        let a=int;
        for (let i = 0; i < arr.length; i++ ){
            a = arr[i](a)
        }
        return a
}

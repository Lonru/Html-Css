//자바스크립트는 자료형이 동적으로 정해진다.

var num = 10;
console.log("num",num);
var str="문자열"
console.log("str",str);
var floatNum = 10.5;

console.log("floatNum",floatNum);
var charStr="가"
console.log("charStr",charStr);

var boolData = true;
console.log("boolData",boolData);
var list=[1,2,3,4,5,6];
console.log("list",list);
console.log("list[0]",list[0]);
console.log("list[5]",list[5]);
var user ={
    name:"홍길동",
    phone:"010101010"
}
console.log("user",user);
console.log("user.name",user.name);
console.log("user.phone",user.phone);

var hello = function(){
    alert("함수 호출됨");
}

hello();

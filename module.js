var name = "zamal"
let math = 0
let english = 0
let ICT = 1
var total = (math+english+ICT)

if(total > 120){
    var replay = 'you passed'
}
else if( total == 0){
    replay= 'your are not a student faltu'
}
else{
   var replay = 'you failed'
}
var comment = `hey mr ${name} i hve a message for you ${replay}`

var cmt = 'do you want to meet mee'
var result = 0
var swt = 1
if(swt == 1){
    result=comment
}
else{
    result=cmt
}
console.log(result)
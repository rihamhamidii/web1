let grades=[85,75,90,65,80];
let sum=0;
let average=0;
for(let a=0; a<grades.length;++a){
      sum = grades[a]+ sum; 
}
average = sum/grades.length;
let evaluatin;
if(average>=90){
    evaluatin="ممتاز";
}
else if(average>=80 && average>=90){
    evaluatin="جيد جداً";
}
else if(average>=70&& average>=80){
    evaluatin="جيد";
}

else if(average>=60 && average>=70){
    evaluatin="مقبول";
}
else if(average<=60){
    evaluatin="راسب";
}
document.write('المجموع الكلي: ' +sum+ '<br>');
document.write('متوسط الدرجات: ' +average+ '<br>');
document.write('التقيم: ' +evaluatin+ '<br>');



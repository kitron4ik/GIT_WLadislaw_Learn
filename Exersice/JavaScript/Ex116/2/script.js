let day = 7;

if(day >=1 && day <=7) console.log("Это первая декада месяца");
else if(day >7 && day <=14) console.log("Это вторая декада месяца");
else if(day >14 && day <=21) console.log("Это третья декада месяца");
else if(day >21 && day <=31) console.log("Это четвёртая декада месяца");
else console.log("Ошибка в дате, пожалуйста укажите другую дату");
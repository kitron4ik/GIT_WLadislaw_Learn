let daysOfWeek2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let currentDay = 3; // Assuming Wednesday is the current day
for (let i = 0; i < daysOfWeek2.length; i++) {
    if (i === currentDay - 1) {
        document.write("<em>" + daysOfWeek2[i] + "</em><br>");
    } else {
        document.write(daysOfWeek2[i] + "<br>");
    }
}
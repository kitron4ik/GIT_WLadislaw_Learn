let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
for (let i = 0; i < daysOfWeek.length; i++) {
    if (i >= 5) {
        document.write("<strong>" + daysOfWeek[i] + "</strong><br>");
    } else {
        document.write(daysOfWeek[i] + "<br>");
    }
}
let students = {
    'group1': ['student11', 'student12', 'student13'],
    'group2': ['student21', 'student22', 'student23'],
    'group3': ['student31', 'student32'],
};

for (let group in students) {
    for (let name of students[group]) {
        console.log(name);
    }
}
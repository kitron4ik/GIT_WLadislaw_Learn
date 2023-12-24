let salaryObj2 = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};
for (let employee in salaryObj2) {
  if (salaryObj2[employee] <= 400) {
      salaryObj2[employee] *= 1.1;
  }
}
console.log(salaryObj2);
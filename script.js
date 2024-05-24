var ENG = +prompt('English Marks'),
  PHY = +prompt('Physics Marks'),
  ISL = +prompt('Islamiat Marks'),
  BIO = +prompt('Biology Marks'),
  CHEM = +prompt('Chemistry Marks');
var Obtainedmarks = ENG + PHY + ISL + BIO + CHEM;
var Percentage = (Obtainedmarks / 500) * 100;
var Grade;
if (Percentage >= 80 && Percentage <= 100) {
  Grade = 'A+';
} else if (Percentage >= 70) {
  Grade = 'A';
} else if (Percentage >= 60) {
  Grade = 'B';
} else if (Percentage >= 50) {
  Grade = 'C';
} else if (Percentage >= 40) {
  Grade = 'D';
} else {
  Grade = 'F';
}

document.write(
  ` <table border = '2px'>
    <tr>
      <th>English</th>
      <th>Physics</th>
      <th>Islamiat</th>
      <th>Biology</th>
      <th>Chemistry</th>
      <th>Percentage</th>
      <th>Grade</th>
    </tr>
    <tr>
      <td>${ENG}</td>
      <td>${PHY}</td>
      <td>${ISL}</td>
      <td>${BIO}</td>
      <td>${CHEM}</td>
      <td>${Percentage}</td>
      <td>${Grade}</td>
    </tr>
  </table>`
);

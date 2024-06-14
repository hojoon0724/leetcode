/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
 
function minMovesToSeat(seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  // console.log(seats, students);
  s = 0;
  while (s < seats.length) {
    if (students.includes(seats[s])) {
      // console.log(`${seats[s]} exists`);
      students.splice(students.indexOf(seats[s]), 1);
      seats.splice(s, 1);
      // console.log(seats, students);
    } else {
      // console.log(`${seats[s]} does not exist`);
      s++;
    }
  }
  // console.log(seats, students);

  let count = 0;
  for (i in students) {
    // console.log(`${students[i]} - ${seats[i]}`);
    count = count + Math.abs(students[i] - seats[i]);
    // console.log(count);
  }

  return count;
}
// 2-get_students_by_loc

function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}

export default getStudentsByLocation;

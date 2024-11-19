// 4-update_grade_by_city

function updateStudentGradeByCity(students, city, newGrades) {
  // Filtrer les étudiants de la ville spécifiée
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Trouver la note correspondante dans newGrades
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

      // Retourner un nouvel objet étudiant avec la note mise à jour
      return {
        ...student,
        grade: gradeObject ? gradeObject.grade : 'N/A', // Si pas de note
      };
    });
}

export default updateStudentGradeByCity;

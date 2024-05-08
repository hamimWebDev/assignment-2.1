{
  //  start
  
  interface Student {
    name: string;
    age: number;
    grades: number[];
  }

  const calculateAverageGrade = (student: Student): number => {
    const Grades: Array<number> = student.grades;
    const GraderSum = Grades.reduce((a, c) => a + c, 0);
    const averageGradeForBob = GraderSum / Grades.length;
    return averageGradeForBob;
  };

  // Sample Input:
  const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
  };

  const averageGradeForBob = calculateAverageGrade(student1);

  // Sample Output:
  console.log(averageGradeForBob);
  //   83;

  //  end
}

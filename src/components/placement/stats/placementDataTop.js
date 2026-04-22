export const placementDataTop = [
  {
    year: "2023-24",
    courses: [
      { course: "B.Tech CE", eligibleStudents: 133, placed: 121, placementPercent: 91, highestPackage: 47, averagePackage: 8.85, medianPackage: 7.5 },
      { course: "B.Tech CE (DS)", eligibleStudents: 63, placed: 55, placementPercent: 87, highestPackage: 40.37, averagePackage: 8.69, medianPackage: 7.5 },
      { course: "B.Tech IT", eligibleStudents: 62, placed: 62, placementPercent: 100, highestPackage: 15.67, averagePackage: 7, medianPackage: 7.5 },
      { course: "B.Tech ECE", eligibleStudents: 53, placed: 51, placementPercent: 96, highestPackage: 14, averagePackage: 6.8, medianPackage: 6.5 },
      { course: "B.Tech IOT", eligibleStudents: 46, placed: 43, placementPercent: 93, highestPackage: 10, averagePackage: 5.98, medianPackage: 5 },
      { course: "B.Tech EL", eligibleStudents: 46, placed: 43, placementPercent: 93, highestPackage: 10, averagePackage: 5.67, medianPackage: 6 },
      { course: "B.Tech Mech.", eligibleStudents: 104, placed: 98, placementPercent: 94, highestPackage: 8.5, averagePackage: 5.95, medianPackage: 6 },
      { course: "B.Tech Civil", eligibleStudents: 38, placed: 27, placementPercent: 71, highestPackage: 5.4, averagePackage: 4.68, medianPackage: 5 },
      { course: "B.Tech EnC", eligibleStudents: 45, placed: 45, placementPercent: 100, highestPackage: 47, averagePackage: 9.62, medianPackage: 7.5 },
    ],
    totals: { course: "Total", eligibleStudents: 590, placed: 559, placementPercent: 93.56, highestPackage: 47, averagePackage: 7.11, medianPackage: 7.2 },
  },
  {
    year: "2024-25",
    courses: [
      { course: "B.Tech CE", eligibleStudents: 145, placed: 123, placementPercent: 85, highestPackage: 46.38, averagePackage: 8.11, medianPackage: 6 },
      { course: "B.Tech CE (DS)", eligibleStudents: 57, placed: 41, placementPercent: 72, highestPackage: 17.3, averagePackage: 10.50, medianPackage: 8.25 },
      { course: "B.Tech IT", eligibleStudents: 58, placed: 54, placementPercent: 93, highestPackage: 23.1, averagePackage: 8.49, medianPackage: 7.28 },
      { course: "B.Tech ECE", eligibleStudents: 55, placed: 55, placementPercent: 100, highestPackage: 17.3, averagePackage: 7.13, medianPackage: 6 },
      { course: "B.Tech IOT", eligibleStudents: 46, placed: 35, placementPercent: 76, highestPackage: 15.5, averagePackage: 7.10, medianPackage: 6 },
      { course: "B.Tech EL", eligibleStudents: 45, placed: 44, placementPercent: 98, highestPackage: 13.52, averagePackage: 6.58, medianPackage: 6 },
      { course: "B.Tech Mech.", eligibleStudents: 134, placed: 134, placementPercent: 100, highestPackage: 15.56, averagePackage: 5.38, medianPackage: 5 },
      { course: "B.Tech Civil", eligibleStudents: 16, placed: 16, placementPercent: 100, highestPackage: 15, averagePackage: 6.21, medianPackage: 6 },
      { course: "B.Tech EnC", eligibleStudents: 40, placed: 39, placementPercent: 98, highestPackage: 24, averagePackage: 9.35, medianPackage: 6 },
      { course: "B.Tech EVS", eligibleStudents: 7, placed: 5, placementPercent: 71, highestPackage: 6, averagePackage: 6.21, medianPackage: 6 },
      { course: "B.Tech RAI", eligibleStudents: 22, placed: 22, placementPercent: 100, highestPackage: 10, averagePackage: 8.21, medianPackage: 8.5 },
    ],
    totals: { course: "Total", eligibleStudents: 625, placed: 570, placementPercent: 91.2, highestPackage: 55, averagePackage: 7.39, medianPackage: 7.47 },
  },
];

export const METRIC_CONFIG = {
  placementPercent: { label: "Placement %", suffix: "%", max: 100 },
  averagePackage: { label: "Avg Package", suffix: " LPA", max: 60 },
  highestPackage: { label: "Highest Package", suffix: " LPA", max: 60 },
  medianPackage: { label: "Median Package", suffix: " LPA", max: 15 },
};

export const getDeptShort = (course) => {
  return course.replace("B.Tech ", "");
};

export const getCommonDepartments = () => {
  const year1Courses = placementDataTop[0].courses.map(c => c.course);
  const year2Courses = placementDataTop[1].courses.map(c => c.course);
  return year1Courses.filter(c => year2Courses.includes(c));
};
// Table des étudiants
// *******************
let students = [
    [54, 'Durand'],
    [55, 'Dupond'],
    [3, 'Smith']
];

// Table des notes par éudiant
// ***************************
let ranges = [
    [54,[12, 14, 17]],
    [55, [13, 4, 19]],
    [3, [10, 10, 10]]
];

// *********************************
// renvoi de le nom de l'étudiant
// dont l'id est passé en paramètre
// *********************************
function getStudentNameById(studentId) {
    let studentName = '';
    
    for (let i = 0; i < students.length; i ++){
        if (studentId === students[i][0] ){
            studentName = students[i][1];
        } 
    }

    return studentName;
}


// ***************************************************
// renvoi un tableau contenant les notes d'un étudiant
// dont l'id est passé en paramètre
// ***************************************************
function getRangesByStudentId(studentId) {
    rangesByStudent = [];
    for (let i = 0; i < ranges.length; i++){
        if (studentId === ranges[i][0]){
            rangesByStudent = ranges[i][1]; 
        }
    }

    return rangesByStudent;
}


function getAverage(ranges){
    let sum = 0;
    let average = 0;
    let i = 0;

    for (i = 0; i<ranges.length; i++){
        sum += ranges[i];    
    }
    
    if (i == 0 || sum == 0)
        return 0;

    return average = sum / i;
}

// *****************************************
// renvoi la moyenne des notes d'un étudiant
// dont l'id est passé en paramètre
// *****************************************
function getAverageByStudentId(studentId) {

    let ranges = getRangesByStudentId (studentId);
    let AverageByStudentId = getAverage (ranges);

    return AverageByStudentId;
}


// ***************************
// renvoi la moyenne des notes 
// de tous les étudiants
// ***************************
function showClassAverages() {
    
    for(let i = 0; i<ranges.length; i++){
        studentName = getStudentNameById (ranges [i][0]);
        studentName= studentName.padStart (studentName.length + 2 , ' ');
        studentName = studentName.padEnd (12, ' ');
        
        averageByStudent = getAverageByStudentId (ranges[i][0]).toFixed(2).toString();
        averageByStudent = averageByStudent.padStart(averageByStudent.length +2, ' ');
        averageByStudent = averageByStudent.padEnd (9, ' ');
        console.log ('\n*' + studentName +'*'+ averageByStudent+'*');
    }
}

showClassAverages();
// *******************
// Table des étudiants
// *******************
let students = [
    [54, 'Durand'],
    [55, 'Dupond'],
    [3, 'Smith']
];


// ***************************
// Table des notes par éudiant
// ***************************
let ranges = [
    [54,[12, 14, 17]],
    [55, [13, 4, 19]],
    [3, [10, 10, 10]]
];


// ***************************
// Table des cours disponibles
// ***************************
let courses = [
    [1,'algo'],
    [2, 'math'],
    [3, 'anglais']
];


// *******************************************
// Table des cours suivis pour chaque etudiant 
// *******************************************
let coursesByStudent = [
    [54,1,2,3],
    [55,1,3],
    [3,2,3]
];



/***************************************************************/
/***************************************************************/
/*******************FONCTIONS DE CALCULS************************/
/***************************************************************/
/***************************************************************/



/****************************************************************
Renvoie de le nom de l'étudiant dont l'id est passé en paramètre
****************************************************************/
function getStudentNameById(students, studentId) {
    let studentName = '';
    
    for (let i = 0; i < students.length; i ++){
        if (studentId === students[i][0] ){
            studentName = students[i][1];
        } 
    }

    return studentName;
}


/***************************************************
Renvoi un tableau contenant les notes d'un étudiant
dont l'id est passé en paramètre
***************************************************/
function getRangesByStudentId(studentId) {
    rangesByStudent = [];

    for (let i = 0; i < ranges.length; i++){
        if (studentId === ranges[i][0]){
            rangesByStudent = ranges[i][1]; 
        }
    }

    return rangesByStudent;
}


/*******************************************************
Renvoie le nom du cours dont l'id est passé en parametre
*******************************************************/
function getCourseNameById (courses, courseId){
    courseName = '';
    for (let i = 0; i < courses.length; i++){
        if (courseId == courses [i][0]){
            courseName = courses [i][1];
        }
    }
    return courseName;
}


/***************************************
Renvoie le tableau des cours suivi par 
l'etudiant qui a pour id celui en entrée
***************************************/
function getCoursesByStudentId (coursesByStudent, studentId){
    let coursesByStudentId = [];
    for (let i = 0; i < coursesByStudent.length; i++){
        if (studentId == coursesByStudent [i][0]){
            coursesByStudentId = coursesByStudent[i].slice(1);
        }
    }
    return coursesByStudentId;
}


/*********************************************
Calcul la moyenne d'un tableau donné en entrée
*********************************************/
function getAverage(ranges){
    let sum = 0;
    let average = 0;
    let i = 0;

    for (i = 0; i<ranges.length; i++)
        sum += ranges[i];    
    if (i == 0)
        return 0;

    return average = sum / i;
}


/*****************************************
Renvoi la moyenne des notes d'un étudiant
dont l'id est passé en paramètre
 *****************************************/
function getAverageByStudentId(studentId) {

    let ranges = getRangesByStudentId (studentId);
    let AverageByStudentId = getAverage (ranges);

    return AverageByStudentId;
}


/***************************************************************/
/***************************************************************/
/*******************FONCTIONS D'AFFCICHAGE**********************/
/***************************************************************/
/***************************************************************/


/***************************************************** 
Les commentaires sous les fonctions sont les éléments 
de fonctions avec du padding pour la sortie en console
*****************************************************/




function creerEntete (argument1, argument2){

    let table = document.querySelector('table');
    let tableHead = document.createElement ('thead');
    let tableBody = document.createElement ('tbody');

    let ligne = document.createElement ('tr');
    let case1 = document.createElement ('th');
    case1.innerHTML = argument1;
    let case2 = document.createElement ('th');
    case2.innerHTML = argument2;


    table.appendChild(tableHead);
    ligne.appendChild (case1);
    ligne.appendChild (case2);
    tableHead.appendChild(ligne);
    table.appendChild(tableBody);

}


function tableFinale (argument1, argument2){
    
    let tableBody = document.querySelector('tbody');

    let ligne = document.createElement ('tr');
    let case1 = document.createElement ('td');
    case1.classList.add ('case1');
    case1.innerHTML = argument1;
    let case2 = document.createElement ('td');
    case2.classList.add ('case2')
    case2.innerHTML = argument2;

    tableBody.appendChild (ligne);
    ligne.appendChild (case1);
    ligne.appendChild (case2);

}



// ***************************
// Ecris la moyenne des notes 
// de tous les étudiants
// ***************************
function showClassAverages(students ,ranges) {
    let studentName = '';
    let phrase = '';
    let averageByStudent = 0;
    let table = document.querySelector ('#resultatTable');
    table.innerHTML = '';

    creerEntete ('Noms', 'Moyennes')

    for(let i = 0; i<ranges.length; i++){
        studentName = getStudentNameById (students, ranges [i][0]);
        averageByStudent = getAverageByStudentId (ranges[i][0]).toFixed(2).toString();
        
        tableFinale(studentName, averageByStudent);
    }
}

/*
    studentName= studentName.padStart (studentName.length + 2 , ' ');
    studentName = studentName.padEnd (12, ' ');
    averageByStudent = averageByStudent.padStart(averageByStudent.length +2, ' ');
    averageByStudent = averageByStudent.padEnd (9, ' ');
            
    phrase = '*' + studentName +'*'+ averageByStudent+'*';
    console.log (phrase);
*/




function showCoursesByStudent(courses, students, coursesByStudent){
    let studentName = '';
    let courseName = '';
    let phrase = '';

    let table = document.querySelector ('#resultatTable');
    table.innerHTML = '';

    creerEntete ('Noms', 'Cours');

    for (let i = 0; i < coursesByStudent.length; i++){
        studentName = getStudentNameById (students, coursesByStudent[i][0]);
        for (let j = 1; j<coursesByStudent[i].length; j++){
            if (j < coursesByStudent[i].length-1){
                courseName +=  getCourseNameById (courses, coursesByStudent[i][j]) + ', ';
            }
            else {
                courseName +=  getCourseNameById (courses, coursesByStudent[i][j]);
            }
        }

        tableFinale (studentName, courseName);

        courseName = '';
        studentName = '';
    }
}


/*
    studentName = studentName.padStart (studentName.length + 2, ' ');
    studentName = studentName.padEnd (10, ' ');
            
    courseName = courseName.padStart (courseName.length + 2,' ');
    courseName = courseName.padEnd (24, ' ');

    phrase = '*' + studentName + '*' + courseName + '*';
            
            

    console.log (phrase);
    document.getElementById("resultatRadioBtn").innerHTML += phrase;
    document.getElementById("resultatRadioBtn").innerHTML+= '<br>';
*/


function showStudentByCourse (courses, students, coursesByStudent){
    let courseName = '';
    let nameList = '';
    let phrase = '';
    let l = 0;
    let temp = [];
 
    let table = document.querySelector ('#resultatTable');
    table.innerHTML = '';
    creerEntete ('Cours', 'Noms')


    for (let i = 0; i < courses.length; i++){
        courseName = getCourseNameById( courses, courses[i][0]);

        l = 0;
        temp = [];
        nameList = '';
        for (let j = 0; j < coursesByStudent.length ; j++){
            for (let k = 1; k < coursesByStudent[j].length; k++){
                if (coursesByStudent[j][k] == courses[i][0]){
                    temp[l] = getStudentNameById (students, coursesByStudent[j][0]);
                    l ++;
                }
            }
        }

        for (l = 0 ; l < temp.length; l++){
            if (l == temp.length-1){
                nameList += temp [l];
            }
            else {
                nameList += temp[l] + ', ';
            }
        }    

        tableFinale (courseName, nameList);
    }
}

/*
    courseName = courseName.padStart (courseName.length +2, ' ' );
    courseName = courseName.padEnd (12, ' ');

    nameList = nameList.padStart (nameList.length +2 , ' ');
    nameList = nameList.padEnd (30, ' ');

    phrase = '*' + courseName +'*' + nameList + '*';
    console.log(phrase);
    document.getElementById("resultatRadioBtn").innerHTML+= phrase;
    document.getElementById("resultatRadioBtn").innerHTML+= '<br>';
*/    


/**************************************
Appelle la fonction d'affichage 
correspondant au choix de l'utilsateurs
**************************************/
function choixMenu  (courses, students, coursesByStudent, choix){
    switch (choix){
        case '1': 
            showClassAverages(students, ranges);
            break;
        case '2':
            showCoursesByStudent (courses, students, coursesByStudent);
            break;
        case '3':
            showStudentByCourse (courses, students, coursesByStudent);
            break;
        case '4':
            document.querySelector ('table').innerHTML = '';
            break;
    }
}


/********************************************************************
Effectue le choix lors du click de l'utilisateur sur un radioButton
Puis appelle la fonction choixMenu 
********************************************************************/

/********* Vieille facon de le faire **********/

/* radios[i].onclick = function (){
     choixMenu (courses,students, coursesByStudent, this.value);
    }
*/

function choixRadioBtn (){

    var radios = document.getElementsByName('choixMenu');
    for (let i = 0; i < radios.length; i++){
        radios[i].addEventListener ('click', () => {
            choixMenu (courses,students, coursesByStudent, radios[i].value);
        });
    }
}

choixRadioBtn ();








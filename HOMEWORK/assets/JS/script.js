
// Student properties:
// Name,
// Surname,
// Age,
// PhoneNumber

// Teacher properties:
// Name,
// Surname,
// Age,
// Educations -> array
// Experience -> array

// Class properties
// Name
// Room
// Teacher -> Teacher constructor
// Students -> Array of Students
// Total duration (in hours)
// getStudentsList() -> Must console.log() all students full names
// getStudentPhoneNumber(studentName) -> must iterate over students and return phone number of found student. Should search based on passed student name studentName.

function Student(name, surname, age, phoneNumber){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.fullName = function(){
        console.log(this.name + " " + this.surname);
    }
};


const STUDENTS_P406 = [
    new Student('Samed', 'Khankishiev', 36, "055 653 30 31"),
    new Student('Ramal', 'Qurbanov', 36, '070 300 00 00'),
    new Student('Vuqar', 'Alixanli', 38, "077 200 40 40"),
    new Student('Turan', 'Bagirov', 34, "055 220 00 01")
];


function Teacher(name, surname, age, educations, experiences){
    this.name = name;
    this.surname = surname;
    this.age = age,
    this.educations = educations;
    this.experiences = experiences;
};

const Jamil = new Teacher ("Jamil", "Aliisgandarov", 21, ['ADNSUI', 'CODE-ACADEMY'], ['PASHA-BANK', 'CODE-ACADEMY']);


function Class(name, room, students, teacher, duration){
    this.name = name,
    this.room = room,   
    this.students = students;
    this.duration = duration;
    this.teacher = teacher;
    this.getStudentsList = function(){
        for(i in students){
            students[i].fullName();
        }
    }

    this.getStudentPhoneNumber = function(StudentName){
        for(i in students){
            if(StudentName==students[i].name){
                console.log(students[i].phoneNumber);
            }
        }
    }
};

const class_P406 = new Class("P406", "Neptune", STUDENTS_P406, Jamil, "1 year");

class_P406.getStudentsList();

class_P406.getStudentPhoneNumber('Samed');

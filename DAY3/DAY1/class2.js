class person{
    constructor()
    {
        this.Name ="tien dung";
        this.age = "19";

    }
    
    getName(){
        return this.Name;

    }
    getAge(){
        return this.age;

}
}
class Student extends   Person{
    constructor(Name,age,studentID){
        super(Name,age);
        this.studentID="sv001";

    }
}
    getStudentInfo()
    {
        Constuctor(Name,age,studentID)
        {
            super(Name,age);
            this.studentID="sv001";
        }
    }
    
    
    getStudentInfo()
    {
       return "dung"+this.getName()+"-tuoi:"+this.getAge()+"-masv:"+this.studentID;
    }
    


var student = new student();
console.log(student.getStudentInfo());
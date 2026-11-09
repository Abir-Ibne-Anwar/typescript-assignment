const multiplyValue = (value: number, multiplier?: number) => {
    if (multiplier === undefined) {
        return value*2;
    }
    if (multiplier === 0) {
        return 0;
    }
    return value * multiplier;
}

const processInput = (input: string | number | boolean): string | number => {
    if (typeof input === 'string') {
        return input.toLowerCase().trim();
    }
    else if (typeof input === 'number') {
        return input * 10;
    }
    else {
        if (input === true) {
            return "Active";
        }
        else {
            return "Inactive";
        }
    }
}

const formatCoordinate = (arg : readonly[latitude : number, longitude: number, locationName: string]) => {
    const [latitude, longtitude, locationName] = arg;
    return`Location: ${locationName} (${latitude},${longtitude})`;
};

const concatenateArrays = <T> (...arrays: T[][]) : T[] => {
    const result : T[] = [];

for(let currentArray of arrays){
    for(let item of currentArray){
        result.push(item);
    }
}
return result;
}

interface Course {
    title : string;
    students : number;
    isPublished : boolean;
}
const getPopularCourses = (courses : Course[], minStudents : number) => {
    const result: Course[] =[];

    for(let course of courses){
        if(course.isPublished && course.students >= minStudents){
            result.push(course);
        }
    }
    return result;
}

function pluckValues <T, K extends keyof T> (items : T[], key: K) : T[K][] {
    const result :(T[K][]) = [];

    for(let item of items){
        result.push(item[key]);
    }
    return result;
}

class Employee {
    constructor (
        protected name : string,
        private baseSalary : number,
    ) {}

    getDetails() : string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    private department : string;
    
    constructor( name : string, baseSalary : number, department : string){
        super(name, baseSalary)
        this.department = department;
    }
    getRoleInfo() : string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const validateAgeAsync = async(age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if(age>=18) {
              setTimeout(()=> {
                resolve("Access Granted");
              },1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"))
        }
    })
}
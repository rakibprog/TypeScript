// typeScript interface
interface Player {
    name:string,
    id:number,
    salary:number,
}

const rocky: Player = {
    name:'rocky',
    id:20,
    salary:120000,
} 

// extends 
interface Couch extends Player {
    couchName:string,
    couchId:number,
    couchSalary:number,
}

const devid: Couch = {
    name:'devid',
    id:20,
    salary:1200, 
    couchName:'devid',
    couchId:20,
    couchSalary:1200, 
}
type User = {
    id: number,
    username: string,
    password: string,
}
interface IResponse<U> {
    msg: string,
    data: U,
}

interface IError {
    error: boolean,
}

interface Iliner extends IResponse<User>, IError {}

const IRes: Iliner = {
    msg: 'ewwfdssd',
    data: {id:1, username: 'eshmat', password: '12233'},
    error: false
};

console.log(IRes)

// module myTestDemo {
//     interface Person {
//         name: string;
//         age?: number;       
//     }

//     var p: IPerson = {
//         favoriteMovie: 'Back to the Future',
//         name: 'Joe',
//         age: 40        
//     };    
// }

// var p = {
//     favoriteMovie: 'Back to the Future',
//     name: 'Joe',
//     age: 40        
// } as IPerson;

// console.log(p.name);
// console.log(p.favoriteMovie);

// interface IPerson {
//     name: string;
//     age?: number;       
// }

// class p implements Person {
//   favoriteMovie: string;
//   name: string;
//   age?: number;
// };  

// const p: Person = {
//     favoriteMovie: 'Back to the Future',
//     name: 'Joe',
//     age: 40        
// } as Person; 

// interface Person {
//     name: string;
//     age?: number; 
//     [key: string]: number | string;      
// }
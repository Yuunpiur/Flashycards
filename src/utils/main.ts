// ! Basic types
let myName: string = "Christopher";
let myAge: number = 19; // this is already inferred by ts, try Ctr + k + I
let isPlayingGame: boolean = true;

// * Regex
let MyRegex: RegExp = /hello/; // Again the types is already inferred

// * Arrays
const splitLetters: string[] = myName.split("");
const number = [3, 4, "4"]; // ?

// ! Generic Type
// * Arrays with union
const splitLetters1: Array<string | number> = ["HELLO", 1, 2];

// * Objects and interface
// ? interface allows you to reuse your types all over your code
interface userTypes {
  password: string;
  age: number;
  isMarried: boolean;
}

const user1: userTypes = {
  password: "hellow123",
  age: 45,
  isMarried: false,
};

// ? Objects as maps
// ? Utility types record
const userInfo: Record<string, number> = {
  "richard": 452342,
  "karen":  4324325
}
userInfo["carlo"] = 432423;


 
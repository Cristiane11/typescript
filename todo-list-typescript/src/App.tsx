import './App.css';
import TodoList from './components/TodoList';

function App(){

  const fullName: string = "Coding Temple"
  const year: number = 2024
  const isThisBootCampFun: boolean = true;
  
  type Person = {
    name: string;
    age: number;
  };

  const person1: Person = {
    name: "Alex",
    age: 26,
  };
  
  const fruits: string[] = ["Bananas", "Orange", "Grapes"];
  console.log("Fruits ", fruits); 

  /* added code starts here */
  const shapeShifter: any = {
    name: 24,
    age: 'Alex'
  }

  const printToConsole = (value: string): void => {
    console.log(value);
  }

  const cat: null = null;
  const dog: undefined = undefined;
  console.log('cat ',cat);
  console.log('dog',dog);
  /* added code stops here */

  return (
    <div>
      <TodoList/>
      <p>Full Name: {fullName}</p>
      <p>Year: {year}</p>
      <p>Is this Bootcamp fun: {isThisBootCampFun ? 'Yes' : 'No'}</p>
      <p>name: {person1.name}</p>
      <p>age: {person1.age}</p>
      
      <p>Fruit 1: {fruits[0]}</p>
      <p>Fruit 2: {fruits[1]}</p>
      <p>Fruit 3: {fruits[2]}</p>      

      {/* added code starts */}
      <button onClick={() => printToConsole('Hello, TypeScript!')}>Click me</button>
      <p>name: {shapeShifter.name}</p>
      <p>age: {shapeShifter.age}</p>
      <p>cat: {cat}</p>
      <p>dog: {dog}</p>
      {/* added code stops */}
    </div>
  );
}

export default App;
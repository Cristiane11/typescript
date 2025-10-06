import './App.css';

function App(){

  const fullName: string = "Coding Temple"
  const year: number = 2024
  const isThisBootCampFun: boolean = true;  
  
  /* added code starts */
  type Person = {
    name: string;
    age: number;
  };

  const person1: Person = {
    name: "Alex",
    age: 26,
  };
  /* added code stops */

  //Render the typed data to the screen
  return (
    <div>
      <p>Full Name: {fullName}</p>
      <p>Year: {year}</p>
      <p>Is this Bootcamp fun: {isThisBootCampFun ? 'Yes' : 'No'}</p>
      {/* added code starts here */}
      <p>name: {person1.name}</p>
      <p>age: {person1.age}</p>
      {/* added code stops here */}
    </div>
  );
}

export default App;


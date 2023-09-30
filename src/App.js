
import { useState } from 'react';
import InputForm from './Components/InputForm';
import Display from './Components/Display';





function App() {
  const [user, setUser] = useState(null);
  const userDisplay = (user && (user.message !== "Not Found" )) && <Display user={user} />;

  return (
    <div>

      <InputForm setUser={setUser}/>
      {userDisplay}
     
    </div>
  );
}

export default App;

//Display" we want conditional rendering


//What do we need
// takes in input, a username 
// when submitted, fetch that users data from github
// display that data 

//how many components
// wrapper/parent app component ->  form with an input display div with the github information
//what are our stateful variables
//  user inputted information/ username
//  object of github information /userdata
//where do stateful variables get defined 
//  on submit of the form 
//  on finishing the fetch from githubs api
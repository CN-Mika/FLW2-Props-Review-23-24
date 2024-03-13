import React, { useState } from 'react';
import GreetingCard from './GreetingCard'; // Ensure the path is correct based on your file structure
import './App.css'; // Assuming your CSS file is named App.css and is in the same directory

const App = () => {
  // Task: Use the useState hook to create a user state with name and message properties
  const [user, setUser] = useState({ name: 'Jane Doe', message: 'welcome to React learning!' });


  return (
    <div className="App">
      {/* Task: Render the GreetingCard component and pass the user object as props */}
      <GreetingCard user={user} />
    </div>
  );
}

export default App;

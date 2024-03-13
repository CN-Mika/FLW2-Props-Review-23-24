import React from 'react';
import './GreetingCard.css'; 

const GreetingCard = (props) => {
  // Task: Destructure the name and message from props

  return (
    <div className="greeting-card">
      {/* Task: Display the greeting message using the name and message from props */}
      Hello {props.user.name}, {props.user.message}!
    </div>
  );
}

export default GreetingCard;

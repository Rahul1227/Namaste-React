import React from "react";
import ReactDOM from 'react-dom/client'; // Correctly import ReactDOM with 'client'

  // creating react element using jsx
  const title=(
    <h1>This is the react title </h1>
  )

  // Creating react component
  const Body=()=>(
    <>
      {title}
      <h5>This is being displayed in the react componet</h5>
    
    
    </>
  )



  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(<Body/>);

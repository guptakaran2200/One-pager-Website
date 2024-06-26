// import React, { useState } from 'react';

// export default function Textform(props) {
//   const handleupclick = () => {
//     console.log("Upper case was clicked" + Text);
//     let newText = Text.toUpperCase();
//     setText(newText);
//   };
//   const handleClearclick = () => {
   
//     let newText = '';
//     setText(newText);
//   };

//   const handleOnChange = (event) => {
//     console.log("On Change");
//     setText(event.target.value);
//   };
  
//   const handleloclick = () => {
//     console.log("Lower case was clicked");
//     let newText = Text.toLowerCase();
//     setText(newText);
//   };

//   const [Text, setText] = useState('');

//   return (
//     <>
//     <div className="container">
//       <h1>{props.heading}</h1>
//       <div className="mb-3">
//         <label htmlFor="mybox" className="form-label">Enter your basic details</label>
//         <textarea className="form-control" value={Text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
//       </div>
//       <button className="btn btn-primary" onClick={handleupclick}>Convert to upper case</button>
//       <button className="btn btn-primary mx-3" onClick={handleloclick}>Convert to lower case</button>
//       <button className="btn btn-primary mx-3" onClick={handleClearclick}>Clear text</button>

//     </div>
//     <div className="container my-2">
//       <h2>Your text summary</h2>
//       <p>{Text.split(" ").length} words and {Text.length} characters</p>
//       <p>{0.008 * Text.split(" ").length}Minutes read</p>
//       <h2>Preview</h2>
//       <p>{Text}</p>
//     </div>
//     </>
//   );
// }

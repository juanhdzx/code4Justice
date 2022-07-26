import React from "react"; //allows us to use JSX, 
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>;  //
const time = new Date();

ReactDOM.render(element, document.getElementById("root")); //insert the text hello world in the div in HTML file by setting a development server

// function components
function Webpage() {
    return <section>
        <header><h1>Hello</h1></header>
        <p>Lorem ipsum dolor, sit abdhbi eihu fiiugafv</p>
        {/* <Clock time={date} /> //now clock is active */}
    </section>
}

  // Nest components
//   function Clock(props) {
//       let time = new Date().toLocaleTimeStirng("UK");
//       setInterval(setTime, 1000);

//         function setTime() {
//             time = new Date().toLocaleTimeString
//         }

//     return <p>It's currently: {time}</p>
// }


// ReactDOM.render(<Webpage />, document.getElementById("root")); // executes function which returns to JSX
        //w JSX u can use JavaScript, any JS statements

      
//  class components

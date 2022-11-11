import React from "react";
import { marked } from 'marked';



// let marked = require("marked")

let data = `
# The Lord is good on H1.
## This is H2 styled element.

\`This is a coded message\`
\`\`\`
let Who am I =
{
  Identity: "Ismaila Damilare Elijah",
  Occupation: "Web Developer",
  Coding level : "Proficient",
  Intelligence Quotient: "Super"
}
\`\`\`
[This links to my random quote generator](https://bestbynature.github.io/Dammy-Random-Quote-Generator/)

This is my to do list today
1. Pray
2. Handle Projects
3. Play
4. Socialise

> This is the way to markdown a blockquote

**Be 'Bold' and Courageous for the Lord has given the land to you**

![running cats](https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg)
`

marked.setOptions({
  breaks: true
})




export default class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      markText: data
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
    
    handleChange = (event) =>{
    this.setState(
      {
        markText: event.target.value
      }
    )
}

    handleClick = () =>{
      this.setState(
        {
          markText: " "
        }
      )
    }

  render(){
    const editorWindowStyle = {
      width: "400px",
      height: "55vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"5px",
      backgroundColor: "#eee",
      border: "4px solid FireBrick",
      
    };
       
    const previewWindowStyle = {
      width: "450px",
      height: "135vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px",
      border: "4px solid #ff523b"
    };

    const rowStyle = {
      width: "90%",
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto"
    };

    const colStyle = {
      flexBasis: "45%",
      padding: "10px",
      textAlign: "center",
      backgroundColor: "#ff523b",
      
    };

    const colStyle2 = {
      flexBasis: "45%",
      padding: "10px",
      textAlign: "center",
      
    };

    const container = {
      width: "95%",
      maxWidth: "100%",
      marginLeft: "auto",
      marginRight: "auto",
    };

    const btn = {
      height: "30px",
      borderRadius: "10px",
      color: "blue",
    }

    return(

      <div className="App" style={container}>
        <div className="container" style={container}>
            <div>
              <h1><center>Dammy Markdown Previewer</center></h1>
            </div>
       

        <div className="row" style = {rowStyle}>
          <div className="col-2" style={colStyle} ><h3> Markdown window</h3></div>
          <div className="col-2" style={colStyle} ><h3> Preview window</h3></div>
        </div>



        <div className="row" style = {rowStyle}>
          <div className="col-2" style={colStyle}>
          <div style={editorWindowStyle}>
              <textarea id="editor" className="input" style={editorWindowStyle} onChange={this.handleChange} value={this.state.markText}></textarea>
            </div> <br /> <br />
            <div><button type="reset" style= {btn} onClick={this.handleClick}>CLEAR ALL</button></div>
          </div>

          <div className="col-2" style={colStyle}>
          <div className="col-md-6">
            <div id="preview" style={previewWindowStyle} dangerouslySetInnerHTML = {{
              __html: marked(this.state.markText) }}></div>
          </div>
          </div>
        </div>

      </div>
    </div>
      
    )
  }
}





// import { marked } from "marked";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

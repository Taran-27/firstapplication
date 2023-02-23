import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Notfound from './Pages/Notfound'

function App(){
  return(
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path = '/' element = {<Home/>}></Route>
        <Route exact path = '/login' element = {<Login/>}></Route>
        <Route exact path = '/signup' element = {<Signup/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

 
// render method display pannura ella html tag um hold panni vaikum adhan render
// class ku thevayana data va state hold pannum so state is mutable so it will change adhuku dhan setstate use pannuvanga
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={name:false}
//     this.attach=this.attach.bind(this);
//   }
//   attach(){
//     this.setState({name:!this.state.attach})
//   }
//    render(){
//     var bio = this.state.name?(<div id="show"><h2>its trying with turnery operation with state </h2>
//     <button onClick={this.attach}>show less</button></div>):(<button onClick={this.attach}>show me</button>);

//      var myStyle={
//        fontsize: 50,
//        color: 'red'
//      }

//      var i=1;
//     return(
//       <div>
//         {/* style(style-permenant attribute name) n (attribute variable) tharanum  */}
//         <h1>WELCOME</h1>
//         <p style={myStyle}>Its worked </p>
//         {/* ifelse statement ha jsx allowed pannadhu - jsx - JavaScript XML */}
//         {/* so turnery operation use pannurom that means question mark? */}
//         <h1>{i==1?'true':'false'}</h1>

//         <div id="show">
//           {bio}
//         </div>

//       </div>
//     )
//    }
// }

// export default App;

// function App(){
//   const [isShown, setIsShown] = useState(false)

//   return (
//     <div className="main">
//       <img src={logo} alt="BlackRed.jpg" height="1000px" width="100%"/>
//       <form action="Verify" method="post">
//           <div className="center hideform">
        
//             <input type="text" id="gmail" placeholder="Gmail" name="gmail"></input><br></br>
//             <input type="text" id="password" placeholder="Password" name="password"></input><br></br>
//             <input type="Submit" id="Submit"></input>
//           </div>
//       </form>
     
//       <button id="show">Log in</button> <br />


    
//     </div>
    
//   );
// }



// export default App;


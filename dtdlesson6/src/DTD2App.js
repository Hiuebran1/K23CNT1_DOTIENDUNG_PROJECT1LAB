import React,{Component} from "react";
import DTD2EventForm1 from "./components/DTD2EventForm1";
import DTD2EventForm2 from "./components/DTD2EventForm2";
import DTD2EventForm3 from "./components/DTD2EventForm3";
import DTD2EventForm4 from "./components/DTD2EventForm4";
import DTD2EventForm5 from "./components/DTD2EventForm5";
class DTD2App extends Component{
  
   
  render(){
    return(
      <div className="container border my-3 bgwhite">
        <h1 className="text-center" >Event Form - Demo</h1>
        <hr/>
        <DTD2EventForm1/>
        <DTD2EventForm2/>
        <DTD2EventForm3/>
        <DTD2EventForm4/>
        <DTD2EventForm5/>


      </div>
    );
  }
}
export default DTD2App;
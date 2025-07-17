import React from "react";
import Header from "./Header";
import LeftCardLine from "./LeftCard";
import MainCard from "./mainCard";
//  import MainCard from "./assets/mainCard.jpg"
import LeftBar from "./leftsidebar";






const App: React.FC=()=>{
  return(
    <>
   <Header/>
   <LeftBar/>
   <LeftCardLine/>
    <MainCard/>

   
   

   
    </>
  )
}



export default App
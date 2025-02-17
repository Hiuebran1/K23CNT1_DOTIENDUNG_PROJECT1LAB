import React from 'react'

export default function DTDJsxExpression() {
    const name="do tien dung";

    const user={
        fristname:"dung",
        lastname:"do",
    }
    const fullname=(user)=>{
        return  user.fristname+' '+ user.lastname;
    }
    const element=( 
        <div>
           <h2> {fullname(user)} </h2>
            <hr/>
            <h3>welcome to,{name}</h3>
        </div>
    );
    const sayWelcome = (name)=>{
        if(name){
            return <h3>welcome to {name} </h3>
        }else{
            return <h3>welcome to fit-NTU-K23CNT1 </h3>
        } 
    }
    return (
        <div>
            <h1>
                DTD-JSX EXPRESSION

            </h1>
            {element}
            <hr/>
            {sayWelcome()}
            <hr/>
            {sayWelcome("quach duc huy")}
        </div>
    );
}
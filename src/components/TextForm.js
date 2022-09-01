import React from "react";
import { useState } from "react";

export default function TextForm(props) {
    
   const [text,setText]= useState('')
     function onchangeHandler(e){
            setText(e.target.value)
     }  
     function upClickHandler(){
            let newText=text.toUpperCase();
        //    console.log('uppercase')
           setText(newText)
           props.showAlert('Convertes to uppercase','success')
     }  

     function  lowClickHandler(){
            let newText=text.toLowerCase();
        //    console.log('uppercase')
           setText(newText)
           props.showAlert('Convertes to lowercase','success')
     }  

    //  cleartext
     function  clearTextHandler(){
            let newText="";
        //    console.log('uppercase')
           setText(newText)
           props.showAlert('Text cleared','success')
     }  
    //  copytext function
      const handelCopy=()=>{
console.log('copied')
         let text=document.getElementById('exampleFormControlTextarea1');
         text.select();
        //  text.setSelectionRange(0,9999);
         navigator.clipboard.writeText(text.value);
         props.showAlert('Copied to clipboard','success')
      }
      // extra spaces remove
      const handelExtraSpaces=()=>{
         let newText=text.split(/[ ]+/).join(' ');
        //  let newText=text.replace(/\s/g,'');   to add no space between
            // console.log(newText)
            setText(newText);
            props.showAlert('Extra spaces has been removed','success')
    } 
    // capatalixe firs letter
    const capatlizeFirstLetter=()=>{
        console.log('capatalized')
        // let newText=text.trim().split(/[ ]+/);
        // console.log(newText)
          let newText=text.trim().split(/[ ]+/).join(' ').split(' ').map
          (word=>{
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
          })
          console.log(newText.join(' '))

             setText(newText.join(' '))
             props.showAlert('Letter has been capatalized','success')

    }

  return (
    <div className="container">
      <h3  style={{color:props.mode==='light'? 'black':'white'}}>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={onchangeHandler}
          rows="8"
          placeholder="Enter text here!!"
          style={{background:props.mode==='light'? 'white':'grey',color:props.mode==='light'? 'black':'white'}}
        ></textarea>
           </div>
      <button className="btn btn-primary my-2" onClick={upClickHandler}>ToUpperCase</button>
      <button className="btn btn-primary my-2 mx-2" onClick={lowClickHandler}>ToLOwerCase</button>
      <button className="btn btn-primary my-2 mx-0" onClick={clearTextHandler}>Clear Text</button>
      <button className="btn btn-primary my-2 mx-2" onClick={handelCopy}>Copy Text</button>
      <button className="btn btn-primary my-2 mx-2" onClick={handelExtraSpaces}>Remove Extra Spaces</button>
      {/* <button className="btn btn-primary my-2 mx-0" onClick={handleDarkTheme}>Dark Theme</button> */}
      <button className="btn btn-primary my-2 mx-0" onClick={capatlizeFirstLetter}>capatalize First Letter</button>
      <div className="container"style={{color:props.mode==='light'? 'black':'white'}}>
      <p><strong>{text.split(" ").length-1}</strong> words <strong> {text.length}</strong> characters</p>
      <p>Will take <strong>{((0.008*text.split(" ").length-0.008))}</strong> minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length<=0? 'Enter something to preview here!!':text }</p>
      </div>
     
    </div>
  );
}

import React from 'react'

export default function Alert(props) {
 const capatalize=(word)=>{
    let lower=word.toLowerCase();
    return lower[0].toUpperCase()+lower.slice(1);
 }


  return (
      props.alert&& <div>
      <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
       <strong>
       {capatalize(props.alert.typ)}
        </strong>:{props.alert.msg}
       
        </div>
            </div>
  )
}

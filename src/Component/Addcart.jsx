import React,{useState} from "react";
import {Button} from "react-bootstrap";

const Add= (props)=>{
  const handleupClick=()=>{
    let newText= text.toUpperCase()
    setText(newText);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const[text, setText]=useState('Enter your text here');

    return(
        <div title="" hello="">
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="box" rows="8">
          </textarea>
          </div>
          <Button className="btn btn-primmary" onClick={handleupClick}>Submmit</Button>
        </div>

    );

};
export default Add;

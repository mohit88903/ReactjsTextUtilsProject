import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = ()=>{
     let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoclick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!", "success");
     }
     const handleClearclick = ()=>{
      let newText ='';
      setText(newText);
      props.showAlert("Text Cleared!", "success");
     }
    const handleOnchange = (event)=>{
        setText(event.target.value)

    }
    const handleCopy = ()=>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!", "success");
      }
  const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success");

     }

  const [text, setText] = useState('');
  return (
    <>
    <div className ="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
     <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert To UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert To UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>preview</h2>
    <p>{text.length>0?text:"enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}

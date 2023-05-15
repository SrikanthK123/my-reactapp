import React ,{useState} from 'react'

export default function TextForm(props) {
    const Generate = ()=>{
        console.log("clicked "+Text)
        let newT = Text.toUpperCase()
        setText(newT)
        props.showAlert('Converted into UpperCase','success')
        
    }
    const ChangeText = (event)=>{
        console.log("clicked")
        setText(event.target.value)
      
        
    }
    const ClearText =(event)=>{
        setText('')
        props.showAlert('Comment Cleared','success')
    }
    const [Text,setText] = useState(" ");
  return (
    <>
    
    <div className='container my-5'style={{color : props.mode === 'dark'? 'white':'black'}}>
        <h1>Comment on this Web Page</h1>
      <div className="form-group">
    
    <textarea className="form-control" value={Text} alert={alert} onChange={ChangeText} id="exampleFormControlTextarea1" style={{backgroundColor : props.mode === 'light'? 'white':'grey',color:props.mode === 'dark'? 'white':'black'}} rows="8"></textarea>
  </div>
  <button className='btn btn-primary mx-3' onClick={Generate}>Comment</button>
  <button className='btn btn-primary' onClick={ClearText}>Clear</button>
    </div>

    <div class="container my-4"style={{color : props.mode === 'dark'? 'white':'black'}} >
        <h1>Hello World</h1>
        <p>words : {Text.split(" ").length} and characters : {Text.length}</p>
        <p>{0.008*Text.split(" ").length} mins read</p>
        <h2>Preview your Comment</h2>
        <p>comment : {Text}</p>
    </div>
    
    </>
  )
}

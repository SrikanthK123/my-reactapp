import React from 'react'
import { useState } from 'react'

export default function About(props) {
    const [myStyle,setMystyle] = useState({
            color : 'black',
            backgroundColor : 'white',
            
    })
    const [Mode,setMode] = useState("Dark Mode")
    const LightMode = ()=>{
        if(myStyle.color=== 'black'){
            setMystyle({
                color : 'white',
                backgroundColor : 'black'
            })
            setMode("Dark Mode")
        }else{
            setMystyle({
                color : 'black',
                backgroundColor : 'white'
            })
            setMode("Light Mode")
            
        }
    }

  return (
    <>
    <div className='container' style={myStyle} >
      <div className="jumbotron"style={myStyle}>
  <h1 className="display-4"style={myStyle}>Hello, world!</h1>
  <p className="lead"style={myStyle}>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p style={myStyle}>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
  <a className="btn btn-primary btn-lg" onClick={LightMode} href="#" role="button">{Mode}</a>
</div>
    </div>
    </>
  )
}

import React,{useState} from 'react'

export default function TextForm() {
    const KeepUp=()=>{
        let newTxt=msgbox.toUpperCase();
        setMsg(newTxt);
    }
    const keepChange=(event)=>{
        setMsg(event.target.value);
    }
    const [msgbox,setMsg]=useState();
  return (
    <>
    <div className="container form-floating">
  <textarea className="form-control" value={msgbox} onChange={keepChange} row="18" id="floatingTextarea"></textarea><br/>
  <button className='btn btn-primary' onClick={KeepUp}>Yeh lo loasdljlasd</button>

</div>
</>
  )
}

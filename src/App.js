import './App.css';
import Doc from './Doc';
import React, {useState} from 'react';
import { marked } from 'marked';
import useLocalstorage from './useLocalstorage';

const App = () => {
  const [code, setCode] = useLocalstorage()
  const [compiled, setCompiled] = useState()
  // const [doc, setDoc] = useState('')
  const [hideCode, setHideCode] = useState(false)
  const [hidePreview, setHidePreview] = useState(true)
  
  const openMD = () => {
    setHideCode(false)
    setHidePreview(true)
  }
  
  const openPreview = () => {
    setHideCode(true)
    setHidePreview(false)
    setCompiled(marked.parse(code))
  }
  
  const openDoc = () => {
    setHideCode(true)
    setHidePreview(true)
  }
  
  const handleChange = (e) => {
    setCode(e.target.value)
    // setCompiled(marked.parse(e.target.value))
  }
  
  let content = '';
  if(hidePreview){
    if(hideCode){
      content = <Doc/>
    } else {
      content = <div><textarea name='markdown' onChange={handleChange} value={code}/></div>
    }
  } else {
    content = <div><textarea name='html' onChange={()=>{}} value={compiled}/></div>
  }
  
  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">MarkDown</button>
          <button onClick={openPreview}>Preview</button>
          <button onClick={openDoc}>Documntation</button>
        </div>
        {content}
      </div>
    </>
  )
}


export default App;

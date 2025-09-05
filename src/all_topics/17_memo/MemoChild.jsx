import React,{memo} from 'react'

const MemoChild = (props) => {

    console.log("I am Memo Child");
    
  return (
    <div>MemoChild</div>
  )
}

export default memo(MemoChild)
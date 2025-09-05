import {useState} from 'react';
import LifeCycleInFBC from './LifeCycleInFBC';
import LifeCycleInCBC from './LifeCycleinCBC';

const LifeCycleParent = () => {
    const[toggle, setToggle]=useState(false);
  return (
    <div>
        <button onClick={()=> setToggle(!toggle)}><h1>Click</h1></button>
        {toggle ? <LifeCycleInCBC/> : <h1> No Component</h1>}
    </div>
  )
}

export default LifeCycleParent
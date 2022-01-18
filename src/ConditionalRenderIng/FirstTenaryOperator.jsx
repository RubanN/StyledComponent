import React,{useState} from 'react'
import { TextField,Typography } from '@material-ui/core';

  
  

function FirstTenaryOperator() {
      const [list,setList] = useState([])
       
      const updateList =()=>{
          setList(prev=>{
              return {
                  ...prev,
                  list:prev=['ruban',23,'Reactjs Deveoper','12,0000']
              }
          })
      }
      const deleteList =()=>{
          setList([])
      }
      return (
      <>
      {console.log("DETAILS",list)}
       <button onClick={updateList}> AddList</button>
       <button onClick={deleteList}>Delete</button>
      </>
    )
}
export default FirstTenaryOperator

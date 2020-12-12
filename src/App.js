import React, { useState } from 'react';
import { Button ,Input } from 'antd';
import ListItem from './ListItem';


 function App(){

  const [inputVal, setInputVal] =useState('');
  const [list, setlist] =useState([]);

  const hanldeChange=(e)=>{
    console.log('item',e.target.value)
    setInputVal(e.target.value);
  }

  const addList=()=>{
    
    setlist([...list, inputVal])
  }
  const deleteList =(index)=>{
    let listItem = list;
    listItem.splice(index,1)
    setlist([...listItem]);
  }

  return(
    <>
      <div>
        {/* 第一个组件 */}
        Hello World
      </div>
      <Input placeholder='雄安新区'  onChange={hanldeChange} value={inputVal}/>
      <Button type='primary'  onClick = {addList}>ok</Button>
      <ul>
        {list.map((item,index)=>{
          return (
            
               <ListItem key={index} props= {{index:index,item:item, deleteList}}/>
          
          )          
        })}
      </ul>
    </>
  )
}

export default App;
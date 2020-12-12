import React from 'react';

function ListItem({props}){

    const handleRemove =(item)=>{
        props.deleteList(item)
    }

    return (
        <li key={props.index} onClick ={()=>{handleRemove(props.index)}}> {props.item}</li>
    )
        

}

export default ListItem;
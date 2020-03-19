import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

export default function SearchResult(props) {
    const btnStyle={
        marginTop:-7,
        float:'right'
    };
    let {searched,onDelete, handleToggle, selected}=props;
    let itemDisplay=searched.map((item, i)=>{
        return (
            <li  
            key={i}
            onClick={() => handleToggle(i)}
            class="list-group-item"
            style={{
                textDecorationLine: selected ? "line-through" : "none",
                textDecorationStyle: selected ? "solid" : "none",
                border: selected ? "2px solid green" : "1px solid black"
              }}>{item}
              <Button onClick={() => onDelete(i)} style={btnStyle} variant="danger">
              Delete
            </Button>
            </li>
        )
    })
    return (
        <div>
        <ListGroup as="ul">
          <li>{itemDisplay}</li>
        </ListGroup>
    </div>
    )
}

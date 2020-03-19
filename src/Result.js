import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

export default function Result(props) {
    const btnStyle={
        marginTop:-7,
        float:'right'
    };
    
    const {item,onDelete, handleToggle, selected}=props;
    //let show=item.map(item=>item);
    console.log("Item value"+item) 
    console.log(selected+"In result")
   let itemShow= item.map((item, i) => {
       
       // console.log(isSelected+"Value of isSelected")
        return (
          <li
            key={i}
            onClick={() => handleToggle(i)}
            class="list-group-item"
            style={{
              textDecorationLine: selected ? "line-through" : "none",
              textDecorationStyle: selected ? "solid" : "none",
              border: selected ? "2px solid green" : "1px solid black"
            }}
          >
            {item}
            <Button onClick={() => onDelete(i)} style={btnStyle} variant="danger">
              Delete
            </Button>
          </li>
        );
      });

    return (
        <div>
            <ListGroup as="ul">
                 {itemShow}
            </ListGroup>
        </div>
    )
} 

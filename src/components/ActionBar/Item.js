import React from 'react';

const Item = (props) => {
    return (
        <div style={{ color: props.status ? "green" : "red"}}>{props.data}</div>
    )
}

export default Item;
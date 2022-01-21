import { useState } from "react";

function ListElement(props){
    const [value,setValue] = useState(props.value);
    return(
        <div style={{height: `${value}px`, background: "#77448f", alignSelf: "flex-end", margin: "0 5px 0 0",flex: "0 1 5em"}}>{value}</div>
    );
}

export default ListElement;
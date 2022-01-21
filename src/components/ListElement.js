import { useState } from "react";

function ListElement(props){
    const [value,setValue] = useState(props.value);
    return(
        <div style={{height: `${value}px`, background: "#77448f", alignSelf: "flex-end",flex: "1 0 1px", overflow: "hidden", margin:"0 .5px"}}></div>
    );
}

export default ListElement;
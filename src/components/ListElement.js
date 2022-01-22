import { useState} from "react";

function ListElement({value}){
    const [v,setV] = useState(value);

    return(
        <div style={{height: `${v/10}%`, background: "#77448f", alignSelf: "flex-end",flex: "1 0 0px", overflow: "hidden", margin: "0 .5px"}}>{v}</div>
    );
}

export default ListElement;
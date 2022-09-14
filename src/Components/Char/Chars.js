import React, {useEffect, useState} from "react";
import {getCaracters} from "../../Serv/CharSer";
import CharInf from "./CharInf/CharInf";


const Char = ({dateFunction}) => {

    let [char, setChar] = useState([])

    useEffect(() => {
        dateFunction().then(date => setChar(date.results))
    }, [])

    return (
        <div>

            {char.map(character => <CharInf charatcer={character}/>)}
        </div>
    )
}

export default Char
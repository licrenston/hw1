import './CharInf.css'


const CharatcerInfo = ({charatcer}) => {
    console.log(charatcer)
    return (
        <div className={'info'}>
            <img src={charatcer.image} alt=""/>
            <div>
                <p>{charatcer.id}</p>
            </div>
            <div>
                <p>{charatcer.name}  </p>
                <p>{charatcer.gender}</p>
                <p>{charatcer.status} </p>
                <p>{charatcer.species}</p>
                <p>{charatcer.gender}</p>
            </div>

        </div>
    )
}

export default CharatcerInfo
// "results":[{"id":1,"name":"Rick Sanchez","status":"Alive","species":"Human","type":"","gender":"Male",
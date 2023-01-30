



function Title (props){
    return <>
    <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
    </div>
    
    </>

}

function ImageDesc(props){
    return
}

export default function EquipmentsContent(props){
    return  <>
    <div>
        <Title
            title="DECOUVREZ NOS EQUIPEMENTS"
            text="Car nous croyons que l’excellence de nos expériences et votre confort passe avant tout, nous n’achetons que les meilleurs produits du marché, et sommes directement en contact avec les marques pour proposer des outils adaptés à tous."
        />
        <Title
            title="ILS SONT SATISFAITS DE NOS ÉQUIPEMENTS"
            text="Ceux qui en parlent le mieux, ce sont vous. Pour finir de vous convaincre de la qualité et de l’excellence de nos équipements, rien de mieux que d’écouter les retours que vous nous faites à chaque fin de sessions. Le taux satisfaction de nos clients concernant nos outils d’immersion est de 90%. "
        />

    </div>

    </>
}
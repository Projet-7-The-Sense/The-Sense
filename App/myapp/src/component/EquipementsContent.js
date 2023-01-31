import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"




function Title (props){
    return <>
    <div className="title-equip">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
    </div>
    
    </>

}

function ImageDescL(props){
    return <>
        <div className="image-desc-equip">
            <Row>
                <Col lg={{span:"5",offset:"1"} } xs={{span:"10" ,offset:"1"}}>
                    <img className="img-l" src={props.img}></img>
                </Col>
                <Col lg={{span:"5", offset:"0"}} xs={{span:"10" ,offset:"1"}} >
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </Col>
            </Row>
        </div>

    </>
}

function ImageDescD(props){
    return <>
        <div className="image-desc-equip" id="equip-l">
        <Row>
                <Col lg={{span:"5",offset:"1"}} xs={{span:"10" ,offset:"1"}}>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </Col>
                <Col lg={{span:"5",offset:"0"}} xs={{span:"10" ,offset:"1"}}>
                    <img className="img-d" src={props.img}></img>
                </Col>
            </Row>
        </div>

    </>
}

export default function EquipmentsContent(props){
    return  <>
    <div className="equipments-contents">
        <Title
            title="DECOUVREZ NOS EQUIPEMENTS"
            text="Car nous croyons que l’excellence de nos expériences et votre confort passe avant tout, nous n’achetons que les meilleurs produits du marché, et sommes directement en contact avec les marques pour proposer des outils adaptés à tous."
        />
        <ImageDescL
            img="./img/image 122.svg"
            title="LA VR, UNE AFFAIRE D’EXCELLENCE"
            text="Concernant notre casque VR, nous avons choisit d’optimiser vos expériences grâce à l'HTC VIVE COSMOS ! Chaque casque possède un écran LCD, offrant une qualité optimale pour une meilleure immersion. Car nous avons à coeur votre satisfaction, The Sense vous offre la meilleure technologie du marché actuel pour encore plus d’émotions et d’immersion."
        />
        <ImageDescD
            img="./img/image 123.svg"
            title="BAGPACK HAPTIQUE RAPTURE"
            text="Haptique Rapture est une combinaison spécialisée pour l’utilisation VR, cette “armure” vous permettra de vous mouvoir sans problème et avec fluidité dans le jeu comme dans la réalité. Votre confort est également assuré grâce à son mantient et sa légéreté impressionnante (à peine 5kg), qualitées vous assurera une expérience réussie. "
        />
        <ImageDescL
            img="./img/image 124.svg"
            title="COMPLEXE THE SENSE"
            text="Notre complexe d’une taille de 2 hectare vous permettra de vous amuser sans vous soucier des limites du terrain. Toutes nos expériences possèdent une salle dédiée d’environ 50m², y compris la CREATIVE ROOM que nous pouvons aménager selon vos goûts. Nous avons également souhaité rendre vos parties les plus immersives possible c’est nous mélons VR et Réalité Augmenté, vous permettant d’agir dans la vrai vie avec l’environnement de votre immersion."
        />
        <Title
            title="ILS SONT SATISFAITS DE NOS ÉQUIPEMENTS"
            text="Ceux qui en parlent le mieux, ce sont vous. Pour finir de vous convaincre de la qualité et de l’excellence de nos équipements, rien de mieux que d’écouter les retours que vous nous faites à chaque fin de sessions. Le taux satisfaction de nos clients concernant nos outils d’immersion est de 90%. "
        />

    </div>

    </>
}
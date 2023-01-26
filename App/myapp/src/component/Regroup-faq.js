import { Col, Row } from "react-bootstrap";
import Faq from "./Faq"




const Regroup =(props) =>{
    return <>
        <div className="regroup-faq">
            <Row>
                <Col lg={{span:8, offset: 2 }} xs={{span:11, offset: 1 }}>
                    <h2>Foire aux questions</h2>
                    <Faq
                        question="Qu'est ce que The Sense ?"
                        answer="The Sense est une immersion poussée grâce à la réalité virtuelle."
                    />
                    <Faq
                        question="Il y a-t-il un âge et taille minimum pour participer à une expérience The SENSE"
                        answer="The Sense est une immersion poussée grâce à la réalité virtuelle."
                    />
                    <Faq
                        question="Quels est le nombre maximum de participants pour jouer"
                        answer="The Sense est une immersion poussée grâce à la réalité virtuelle."
                    />
                    <Faq
                        question="Avez-vous une politique d'annulation et de remboursement ? Si oui, comment se déroule-t-elle ?"
                        answer="The Sense est une immersion poussée grâce à la réalité virtuelle."
                    />
                    <Faq
                        question="Est-il possible de déposer mes affaires 'encombrants' avant de faire une expérience ? Puis-je garder mes lunettes ?"
                        answer="The Sense est une immersion poussée grâce à la réalité virtuelle."
                    />
                </Col>
            </Row>
        </div>
        
    </>
    
}

export default Regroup;
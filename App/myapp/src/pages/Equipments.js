import Footer from '../component/Footer.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import Banner from '../component/Banner.js';
import EquipmentsContent from '../component/EquipementsContent.js';
import CriticCarousel from '../component/CriticCarousel.js';

const Equipments = () => {
    return (
        <>
        <CollapsibleNavbar/>
        <div className='header-equip'>
            <div className="img-equipment">
                <h1>Nos équipements</h1>
            </div>
            <div className='button-equipment'>
                <a href='#banner'><img src='./img/DECOUVRIR.svg' alt='button discover image'/></a>
            </div>
        </div>

        <Banner
                
                theme="the-sense"
                title="LA VR, UNE AFFAIRE D'EXCELLENCE"
                logoImage="/img/SENSE.svg"
                description="Pour une expérience aussi bien virtuelle que réelle nous avons besoin d’équipements de hautes qualités prêt à vous suivre là où vous irez ! Pour nous, la garantie d’une expérience réussie passe forcément par la qualité de notre matériel. C’est pourquoi nous cherchons constamment les dernières technologies sur le marché pour pouvoir vous proposer le meilleur de la Réalité Virtuelle. Nous travaillons également directement avec les marques leaders du marchés pour vous proposer du matériels adaptés à vos besoins (Lunettes, coiffures, fauteuil roulant, petits et grands, ...). Chez The Sense, l’excellence de nos outils vous garantissent la qualité de votre voyage dans une autre dimension."
                prezImg="../img/image 7.svg"
                linkHidden={true}
                bryceHidden={false}
                vecteur="../img/BRYCE FORME (3).svg"
            />
        
        <EquipmentsContent/>
        <CriticCarousel/>
        <Footer/>
        </>
    );
}

export default Equipments;
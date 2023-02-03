import Footer from '../component/Footer.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import Banner from '../component/Banner.js';
import { useContext } from 'react';
import { RoomContext } from '../contexts/RoomContext.js';
import roomsData from '../RoomsData.json';
import Card from '../component/Card.js';
import CarouselRoom from '../component/CarouselRoom.js';
import { useState } from 'react';

const Experiences = () => {
    const {room, setRoom} = useContext(RoomContext);
    const [lightActive, setLightActive] = useState(true);
    const [darkActive, setDarkActive] = useState(false);
    const [battleActive, setBattleActive] = useState(false);
    const [creativeActive, setCreativeActive] = useState(false);
    const [darkOrder, setDarkOrder] = useState(1);
    const [battleOrder, setBattleOrder] = useState(2);
    const [creativeOrder, setCreativeOrder] = useState(3);
    const [lightOrder, setLightOrder] = useState(4);

    const changeTheme = (newTheme, activeRoom, previousOrder, activeOrder) => {
        setRoom(newTheme);
        setLightActive(false);
        setDarkActive(false);
        setBattleActive(false);
        setCreativeActive(false);
        activeRoom(true);
        // Switch order
        
        const lookedFor = previousOrder;
        activeOrder(4);
        if (lightOrder == lookedFor)
            setLightOrder(lookedFor);
        else if (darkOrder == lookedFor)
            setDarkOrder(lookedFor);
        else if (creativeOrder == lookedFor)
            setCreativeOrder(lookedFor);
        else
            setBattleOrder(lookedFor);
        
    }

    return <section className={"experiences "+room.theme}>
        <CollapsibleNavbar/>
        <div className="exp-header">
                <img src="/img/DARK ROOM.png" className={"logo dark-logo"+(darkActive ? " active" : "") + (" order-"+darkOrder)} alt="dark-room the-sense vr" onClick={() => changeTheme(roomsData.dark, setDarkActive, darkOrder, setDarkOrder)} />
                <img src="/img/BATTLE ROOM.svg" className={"logo battle-logo"+(battleActive ? " active" : "") + (" order-"+battleOrder)} alt="battle-room the-sense vr" onClick={() => changeTheme(roomsData.battle, setBattleActive, battleOrder, setBattleOrder)} />
                <img src="/img/CREATIVE ROOM.svg" className={"logo creative-logo"+(creativeActive ? " active" : "") + (" order-"+creativeOrder)} alt="dark-room the-sense vr" onClick={() => changeTheme(roomsData.creative, setCreativeActive, creativeOrder, setCreativeOrder)} />
                <img src="/img/LIGHT ROOM.svg" className={"logo light-logo"+(lightActive ? " active" : "") + (" order-"+lightOrder)} alt="light-room the-sense vr" onClick={() => changeTheme(roomsData.light, setLightActive, lightOrder, setLightOrder)} />
        </div>
        <Banner
            theme={room.banner.theme}
            prezImg={room.banner.prezImg}
            title={room.banner.title}
            logoImage={room.banner.logoImage}
            description={room.banner.description}
            linkHidden={room.banner.linkHidden}
            bryceHidden={room.banner.bryceHidden}
        />
        <div className="wrapper">
            <div className="container">
                <h1>{room.h1}</h1>
                {room.theme=='creative' &&
                    <h2>{room.h2}</h2>
                }
                <div className="cards-wrapper">

                    <Card
                        image="img/image 2.svg" 
                        player="2-6-8"   
                        timer="40 MIN"
                        title="Dark room"
                        content="Revivez l'histoire d'un chef d'oeuvre cinématographique au travers d’une expérience aussi bien réaliste qu'immersive. Rassemblez ce qu'il vous reste de courage, les inspecteurs Ed et Loren Warren ont besoin de vous. Un malheur hante la maison de ces derniers et vous ne pouvez vous en échapper sans sacrifices. Serez-vous à la hauteur de ce qui vous attend ? Bonne chance, vous en aurez besoin !"
                        slogan="The conjuring experience"
                        age="Interdit aux moins de 18 ans"
                    />
                </div>
            </div>
        </div>
        <CarouselRoom/>
        <Footer/>
    </section>
}



export default Experiences;
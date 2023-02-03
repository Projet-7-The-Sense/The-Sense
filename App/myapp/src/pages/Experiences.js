import Footer from '../component/Footer.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import Banner from '../component/Banner.js';
import { useContext } from 'react';
import { RoomContext } from '../contexts/RoomContext.js';
import roomsData from '../RoomsData.json';
import Card from '../component/Card.js';
import CarouselRoom from '../component/CarouselRoom.js';

const Experiences = () => {
    const {room, setRoom} = useContext(RoomContext);

    return <section className={"experiences "+room.theme}>
        <CollapsibleNavbar/>
        <div className="exp-header">
                <img src="/img/DARK ROOM.png" className="logo dark-logo" alt="dark-room the-sense vr" onClick={() => setRoom(roomsData.dark)} />
                <img src="/img/BATTLE ROOM.svg" className="logo battle-logo" alt="battle-room the-sense vr" onClick={() => setRoom(roomsData.battle)} />
                <img src="/img/CREATIVE ROOM.svg" className="logo creative-logo " alt="dark-room the-sense vr" onClick={() => setRoom(roomsData.creative)} />
                <img src="/img/LIGHT ROOM.svg" className="logo light-logo active" alt="light-room the-sense vr" onClick={() => setRoom(roomsData.light)} />
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
            <CarouselRoom/>
        </div>
        <Footer/>
    </section>
}



export default Experiences;
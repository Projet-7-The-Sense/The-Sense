import Footer from '../component/Footer.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import Banner from '../component/Banner.js';
import { useContext } from 'react';
import { RoomContext } from '../contexts/RoomContext.js';

const Experiences = () => {
    const {room, setRoom} = useContext(RoomContext);

    setRoom('dark');

    return <section className={"experiences "+room}>
        <CollapsibleNavbar/>
        <div className="exp-header">
            <img src="/img/DARK ROOM.png" className="logo" alt="dark-room the-sense vr" onClick={console.log("clicked")} />
            <img src="/img/BATTLE ROOM.svg" className="logo" alt="battle-room the-sense vr" onClick={console.log("clicked")} />
            <img src="/img/CREATIVE ROOM.svg" className="logo" alt="dark-room the-sense vr" onClick={console.log("clicked")} />
        </div>
        <img src="/img/LIGHT ROOM.svg" className="active" alt="light-room the-sense vr" onClick={console.log("clicked")} />
        <Banner
            theme="the-sense"
            prezImg="/img/light-room-video.png"
            title="Qu'est ce que la "
            logoImage="/img/LIGHT ROOM.svg"
            description="Voyagez, explorez, décrouvrez la LIGHT ROOM! Découvre des paysages somptueux et des histories palpitantes dans cette salle accessible pour toute la famille. Ici tout n'est qu'affaire d'émotions et de beauté, explorer les décors de nos expériences et partez à l'aventure en famille ou entre amis à partir de 12 ans. Il ne vous reste plus qu'à franchir le seuil de la LIGHT ROOM et à vous laissez transporter dans un voyage époustouflant. Vos émotions n'attendent que vous !"
            linkHidden={true}
            bryceHidden={true}
        />
        <div className="wrapper">
            
        </div>
        <Footer/>
    </section>
}

export default Experiences;
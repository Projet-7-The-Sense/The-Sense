import Footer from '../component/Footer.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import Banner from '../component/Banner.js';
import { useContext } from 'react';
import { RoomContext } from '../contexts/RoomContext.js';
import { Button } from 'react-bootstrap';

const Experiences = () => {
    const {room, setRoom} = useContext(RoomContext);

    return <section className={"experiences "+room.theme}>
        <CollapsibleNavbar/>
        <div className="exp-header">
            <img src="/img/DARK ROOM.png" className="logo dark-logo" alt="dark-room the-sense vr" onClick={console.log("clicked")} />
            <img src="/img/BATTLE ROOM.svg" className="logo" alt="battle-room the-sense vr" onClick={console.log("clicked")} />
            <img src="/img/CREATIVE ROOM.svg" className="logo" alt="dark-room the-sense vr" onClick={console.log("clicked")} />
        </div>
        <img src="/img/LIGHT ROOM.svg" className="active" alt="light-room the-sense vr" onClick={console.log("clicked")} />
        <Button onClick={() => {
            setRoom("default-theme" == room.theme ? {
                theme: 'dark',
                banner: {
                  theme: "dark-room",
                  title: "Qu'est ce que la",
                  logoImage: "/img/DARK ROOM (1).svg",
                  description: "Vous pensez ne pas avoir peur du noir ? Que rien ne pourra vous effrayer ? Vous avez tord. Avec la DARK ROOM, toutes vos peurs deviendront réelles et en rien de temps, il ne vous restera plus que vos jambes pour vous enfuir. Vous vous penser suffisament fort pour affronter vos peurs ? Franchissez donc le seuil de la DARK ROOM. Vous avez hâte d'y entrer mais dans le noir... Personne nous verra mourir.",
                  prezImg: "/img/image 84.svg",
                  linkHidden: true,
                  bryceHidden: true
                }
              } : {
                theme: 'default-theme',
                banner: {
                  theme: "the-sense",
                  prezImg: "/img/light-room-video.png",
                  title: "Qu'est ce que la ",
                  logoImage: "/img/LIGHT ROOM.svg",
                  description: "Voyagez, explorez, décrouvrez la LIGHT ROOM! Découvre des paysages somptueux et des histories palpitantes dans cette salle accessible pour toute la famille. Ici tout n'est qu'affaire d'émotions et de beauté, explorer les décors de nos expériences et partez à l'aventure en famille ou entre amis à partir de 12 ans. Il ne vous reste plus qu'à franchir le seuil de la LIGHT ROOM et à vous laissez transporter dans un voyage époustouflant. Vos émotions n'attendent que vous !",
                  linkHidden: true,
                  bryceHidden: true
                }
              });
        }} >Change context</Button>
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
            
        </div>
        <Footer/>
    </section>
}

export default Experiences;
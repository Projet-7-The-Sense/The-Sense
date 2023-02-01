import Footer from '../component/Footer.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import Banner from '../component/Banner.js';
import { useContext } from 'react';
import { RoomContext } from '../contexts/RoomContext.js';
import { Button } from 'react-bootstrap';
import roomsData from '../RoomsData.json';

const changeRoomTheme = () => {
    
}

const Experiences = () => {
    const {room, setRoom} = useContext(RoomContext);

    return <section className={"experiences "+room.theme}>
        <CollapsibleNavbar/>
        <div className="exp-header">
            <img src="/img/DARK ROOM.png" className="logo dark-logo" alt="dark-room the-sense vr" onClick={console.log("clicked")} />
            <img src="/img/BATTLE ROOM.svg" className="logo battle-logo" alt="battle-room the-sense vr" onClick={console.log("clicked")} />
            <img src="/img/CREATIVE ROOM.svg" className="logo creative-logo" alt="dark-room the-sense vr" onClick={console.log("clicked")} />
        </div>
        <img src="/img/LIGHT ROOM.svg" className="active" alt="light-room the-sense vr" onClick={console.log("clicked")} />
        <Button onClick={() => {
            setRoom("default-theme" == room.theme ? roomsData.dark : roomsData.light);
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
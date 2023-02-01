// import Footer from '../component/Footer.js';
// import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
// import Banner from '../component/Banner.js';
// import EquipmentsContent from '../component/EquipementsContent.js';
// import CriticCarousel from '../component/CriticCarousel.js';
// import { ReservationUser } from '../api/reservation.js';
// import { useContext, useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import { UserContext } from '../contexts/UserContext.js';

// const Reservation = () => {
//     const { user, setUser } = useContext(UserContext);

//     const { register, handleSubmit } = useForm();
//     const [reservations, setReservation]=useState([])
    
//     const onSubmit = async (data) => {
//         const res = ReservationUser(data);
//         }
//     const reservation =  await= res.json();
//     setReservation(reservation);
//     }
//     return (
//         {!user?(
//             <Redirect to="/"></Redirect>
//         ):(

//         )}
//         <>
//         <CollapsibleNavbar/>
        

//         <Footer/>
//         </>
//     );
// }

// export default Reservation;
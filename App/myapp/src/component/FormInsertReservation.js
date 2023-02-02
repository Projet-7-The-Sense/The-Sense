import { useContext } from "react";
import { useForm } from "react-hook-form";

import { InsertReservation } from "../api/reservation";
import { UserContext } from "../contexts/UserContext";


export default function FormInsertReservation(props) {
    const { user, setUser } = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {      
      const res = await InsertReservation(data);
      console.log(res);

      props.setDelete(props.deleted+1)
    };
    return(
        <>
        
        
        {!user?(
            <p>Connexion indisponible</p>
        ):(
            <div className="insert-form-reservation">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input className="insert" {...register("user")} placeholder="Name" type='hidden' defaultValue={user.id} required />
                <input className="insert" {...register("pseudo")} placeholder="pseudo" required/>
                <input className="insert" {...register("date")} defaultValue={props.date}  equired />
                <input className="insert" {...register("hours")} defaultValue={props.hours} required />
                <input className="insert" {...register("room")} defaultValue={props.room} type='hidden' required />
                <select className="insert" {...register("player")} >
                  <option>4 joueurs</option>
                  <option>5 joueurs</option>
                  <option>6 joueurs</option>
                  <option>7 joueurs</option>
                  <option>8 joueurs</option>
                </select>
                <button  type="submit">Réserver</button>
              </form>
            </div>
          

        )}
        </>
    );
}
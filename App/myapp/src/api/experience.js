

import { useForm } from "react-hook-form";

function ExperienceUpdate(props){
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
    console.log(data);
    const response = fetch('http://localhost:4444/experience/update', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(()=>props.setDelete(props.deleted+1))
};
    return <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("id")} type="hidden" defaultValue={props.pokemon.id}/>
                <div>
                    <input placeholder="First name" defaultValue={props.exp.text} {...register("text")} required/>
                    <input  {...register("img")} placeholder="Image link" defaultValue={props.exp.img} {...register("img")}required/>
                    <button className="btn" type="submit"></button>
                </div>
            </form>
}


export const getExperience = async () => {
    const response = await fetch(
        'http://localhost:4444/experience/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    return response.status;
}

export default ExperienceUpdate;
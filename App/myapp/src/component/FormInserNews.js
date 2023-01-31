import { useForm } from "react-hook-form";
import { InsertNews } from "../api/news";


export default function FormInsertNews(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {      
      const res = await InsertNews(data);
      console.log(res);

      props.setDelete(props.deleted+1)
    };
    return(
        <>
        
        <div className="insertform">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="insert" {...register("title")} placeholder="Name" required />
          <input className="insert" {...register("image")} placeholder="Image link" required/>
          <input className="insert" {...register("text")} placeholder="content" required />
          <select className="insert" {...register("size")} >
            <option>SmallCard</option>
            <option>WideCard</option>
          </select>
          <button  type="submit">Insert</button>
        </form>
        </div>
        <h2 className="inserttitle">Insert News</h2>
        </>
    );
}
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
        <h2 className="inserttitle">Insert News</h2>
        <div className="insertform">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="insert" {...register("name")} placeholder="Name" required />
          <input className="insert" {...register("img")} placeholder="Image link" required/>
          <input className="insert" {...register("id")} placeholder="content" required />
          <button  type="submit">Insert</button>
        </form>
        </div>
        </>
    );
}
import React,{useState} from "react";
import "./TodoItem.css";

function Todo(props) {
  const [checked, setChecked] = useState(false)
  const { content,id,deleteItem} = props;

  //'CHECKED' KONTROLÜ 
  const changeState = ()=>{
    // console.log("Change State içerisindeyim.")
    setChecked(!checked)
  }
  return (
    //SEÇİLMİŞ DİV'E CHECKED CLASSI'I EKLEME
    <div onClick={changeState} className={ checked ? "d-flex align-items-center checked" : "d-flex align-items-center"}>
      <span>{content}</span>
      <button value={id} onClick={()=> deleteItem(id)} className="btn btn-danger ml-auto">Sil</button>
    </div>
  );
}

export default Todo;

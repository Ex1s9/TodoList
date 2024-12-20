import './style.css'

interface Props {
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="input" onSubmit={ handleAdd }>
      <input type="input" 
        value={todo}
        onChange={
          (e)=>setTodo(e.target.value)
        }
        placeholder="Enter a task" 
        className="input_box" />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  )
}

export default InputFeild
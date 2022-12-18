import ToDoList from "./components-todo/ToDoList";
import useFetch from "./useFetch";


const Home = () => {
    const { data, error } = useFetch('http://localhost:8000/todos');

    return (  
        <div className="home">
            {
                error &&
                <div>{ error }</div>
            }
            {
                //isPending &&
                //<div>Loading...</div>
            }
            {
                data &&
                <ToDoList data={data} />
            }
        </div>
    );
}
 
export default Home;
import ToDoList from "./components-todo/ToDoList";
import Header from "./Header";
import useFetch from "./useFetch";


const Home = ({ handleAlerts }) => {
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
                <Header handleAlerts={handleAlerts} />
            }
            {
                data &&
                <ToDoList data={data} />
            }
        </div>
    );
}
 
export default Home;
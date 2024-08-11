import './App.css';
// import './customCss.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { AppProvider } from "./AppContext";


function App() {
  return (
    <div>
      <div className='container text-center mb-1 col-4'>
        <div className='row  header-row justify-content-center'>
          <div className='p-0'>
            <nav className="navbar navbar-dark bg-danger">
              <h5 className='text-center text-light p-2'>Todo App</h5>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </nav>
          </div>
        </div>

        <AppProvider>

          <div className='main-content mt-2'>
            <TodoForm />
            <TodoList />

          </div>
        </AppProvider>
        <footer>

          <div className="row footer-row justify-content-center">
            <div className='bg-dark text-light'>
              ToDo App &copy;2022
            </div>
          </div>


        </footer>
      </div>
    </div>
  );
}

export default App;

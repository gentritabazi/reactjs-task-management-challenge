import "../../assets/css/main.css";
import AppLayout from "../../layouts/AppLayout/AppLayout";
import { MainProvider } from "../../contexts/MainContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import CreateTask from "../../pages/CreateTask/CreateTask";
import EditTask from "../../pages/EditTask/EditTask";

const App = () => {
  return (
    <div id="App">
      <AppLayout>
        <MainProvider>
          <BrowserRouter>
            <Routes>
              <Route>
                <Route path="/" element={<Home />} />
                <Route path="/create-task" element={<CreateTask />} />
                <Route path="/edit-task/:taskId" element={<EditTask />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MainProvider>
      </AppLayout>
    </div>
  );
};

export default App;

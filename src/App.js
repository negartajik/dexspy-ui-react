import "./App.css";
import AppRoutes from "./config/AppRoutes";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <div className="font-body">
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </div>
  );
}

export default App;

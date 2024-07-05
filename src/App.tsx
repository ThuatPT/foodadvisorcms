// src/App.tsx
import "@/App.scss";
import useRouteElements from "@/useRouteElements";

const App: React.FC = () => {
  const routeElements = useRouteElements();

  return <>{routeElements}</>;
};

export default App;


import ApplicationRoutes from "./routes";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <Provider store={store}>
    <ApplicationRoutes/>
    </Provider>
  );
}

export default App;

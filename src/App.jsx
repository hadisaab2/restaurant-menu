import ApplicationRoutes from "./routes";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HelmetFn from "./helmet";


function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ApplicationRoutes />
          <ToastContainer />
            {/* <HelmetFn /> */}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}

export default App;
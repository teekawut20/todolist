import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./redux/store";

import Home from "./pages/Home";
import Product from "./pages/Product";
import EditBanner from "./pages/Banner";
import Layout from "./components/Layout";

function App() {
  const persistor = persistStore(store);
  const Wrapper = ({ children }: any) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <Wrapper>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout isManage={false}>
                    <Home isManage={false} />
                  </Layout>
                }
              />
              <Route
                path="/manage"
                element={
                  <Layout isManage={true}>
                    <Home isManage={true} />
                  </Layout>
                }
              />
              <Route
                path="/manage/add"
                element={
                  <Layout isManage={true}>
                    <Product isManage={true} />
                  </Layout>
                }
              />
              <Route
                path="/manage/banner"
                element={
                  <Layout isManage={true}>
                    <EditBanner isManage={true} />
                  </Layout>
                }
              />
              <Route
                path="/manage/:id"
                element={
                  <Layout isManage={true}>
                    <Product isManage={true} />
                  </Layout>
                }
              />
            </Routes>
          </Wrapper>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

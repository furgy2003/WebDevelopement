import AllMeetUpPage from "./pages/AllMeetUpPage";
import NewMeetUpPage from "./pages/NewMeetUpPage";
import FavouritePage from "./pages/FavouritePage";
import Layout from "./components/layout/Layout";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUpPage />
        </Route>
        <Route path="/favourite">
          <FavouritePage />
        </Route>
      </Switch>
    </Layout>
  );
}

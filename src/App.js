import { Route, Switch } from "react-router-dom";
import "./App.css";
import AppHeader from "./Components/AppHeader/AppHeader";
import { Provider } from "react-redux";
import store from "./store";
import MovieInfo from "./Components/MovieInfo/MovieInfo";

// hardcoding navigation tab metadata. should be fetched on app load. Available in store through the app
const tabData = [
  {
    label: "Gravity",
    route: "/gravity",
    endpoint: "https://www.omdbapi.com/?t=gravity&y=2018&apikey=6e7e8e47"
  },
  {
    label: "Martian",
    route: "/martian",
    endpoint: "http://www.omdbapi.com/?t=martian"
  },
  {
    label: "Interstellar",
    route: "/interstellar",
    endpoint: "http://www.omdbapi.com/?t=interstellar"
  }
];

const App = () => (
  <Provider store={store}>
    <div className="App">
      <AppHeader />
      <Switch>
        {tabData.map(ele => (
          <Route
            path={ele.route}
            render={() => <MovieInfo endpoint={ele.endpoint} />}
          />
        ))}
      </Switch>
    </div>
  </Provider>
);

export default App;

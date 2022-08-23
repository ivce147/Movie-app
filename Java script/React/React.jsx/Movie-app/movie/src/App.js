import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./Containers/HomePage/HomePage";
import LoginPage from "./Containers/LoginPage/LoginPage";
import Movies from "./Containers/Movies/Movies";
import Series from "./Containers/Series/Series";
import Action from "./Components/Action/Action";
import Animation from "./Components/Animation/Animation";
import Comedy from "./Components/Comedy/Comedy";
import Crime from "./Components/Crime/Crime";
import Drama from "./Components/Drama/Drama";
import Horror from "./Components/Horror/Horror";
import "./App.css";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/action" element={<Action />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/comedy" element={<Comedy />} />
        <Route path="/crime" element={<Crime />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/horror" element={<Horror />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="*"
          element={
            <>
              <div>
                <ErrorPage />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

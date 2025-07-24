import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SpacexInfo from "./pages/SpacexInfoPage";
import Index from "./components/layouts/Index";
import AboutWeb from "./pages/AboutWebPage";
import ListPage from "./pages/ListPage";
import SectionSparkleBackground from "./components/SectionSparkleBackground";
import DetailPage from "./pages/DetailPage";
import Icon from "@mdi/react";
import { mdiAxis } from "@mdi/js";
import BaseSection from "./components/BaseSection";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Index>
                <HomePage />
              </Index>
            }
          ></Route>
          <Route
            path="/spacex-info"
            element={
              <Index>
                <SpacexInfo />
              </Index>
            }
          ></Route>
          <Route
            path="/about-web"
            element={
              <Index>
                <AboutWeb />
              </Index>
            }
          ></Route>
          <Route
            path="/history"
            element={
              <Index>
                <ListPage
                  title="Historical Moment"
                  desc="Beberapa momen bersejarah."
                  condition="history"
                ></ListPage>
              </Index>
            }
          ></Route>
          <Route
            path="/cores"
            element={
              <Index>
                <ListPage
                  title="Cores"
                  desc="Beberapa peristiwa malfungsi."
                  condition="cores"
                ></ListPage>
              </Index>
            }
          ></Route>
          <Route
            path="/cores/:id"
            element={
              <Index>
                <DetailPage
                  title="Cores"
                  desc="Beberapa peristiwa malfungsi."
                  condition="cores"
                ></DetailPage>
              </Index>
            }
          ></Route>
          <Route
            path="/rockets"
            element={
              <Index>
                <ListPage
                  title="Rockets"
                  desc="Beberapa roket."
                  condition="rockets"
                ></ListPage>
              </Index>
            }
          ></Route>
          <Route
            path="/rockets/:id"
            element={
              <Index>
                <DetailPage
                  title="Rockets"
                  desc="Beberapa roket."
                  condition="rockets"
                ></DetailPage>
              </Index>
            }
          ></Route>
          <Route
            path="/capsules"
            element={
              <Index>
                <ListPage
                  title="Capsules"
                  desc="Beberapa capsul"
                  condition="capsules"
                ></ListPage>
              </Index>
            }
          ></Route>
          <Route
            path="/capsules/:id"
            element={
              <Index>
                <DetailPage
                  title="Capsules"
                  desc="Beberapa capsul"
                  condition="capsules"
                ></DetailPage>
              </Index>
            }
          ></Route>
          <Route
            path="/dragons"
            element={
              <Index>
                <ListPage
                  title="Dragons"
                  desc="Beberapa dragon"
                  condition="dragons"
                ></ListPage>
              </Index>
            }
          ></Route>
          <Route
            path="/dragons/:id"
            element={
              <Index>
                <DetailPage
                  title="Dragons"
                  desc="Beberapa dragon"
                  condition="dragons"
                ></DetailPage>
              </Index>
            }
          ></Route>
          <Route
            path="/ships"
            element={
              <Index>
                <ListPage
                  title="Ships"
                  desc="Beberapa perahu bantuan"
                  condition="ships"
                ></ListPage>
              </Index>
            }
          ></Route>
          <Route
            path="/ships/:id"
            element={
              <Index>
                <DetailPage
                  title="Ships"
                  desc="Beberapa perahu bantuan"
                  condition="ships"
                ></DetailPage>
              </Index>
            }
          ></Route>
          <Route
            path="/launches"
            element={
              <Index>
                <ListPage
                  title="Launches"
                  desc="Beberapa momen peluncuran"
                  condition="launches"
                ></ListPage>
              </Index>
            }
          ></Route>
          <Route
            path="/launches/:id"
            element={
              <Index>
                <DetailPage
                  title="Launches"
                  desc="Beberapa momen peluncuran"
                  condition="launches"
                ></DetailPage>
              </Index>
            }
          ></Route>
          <Route
            path="/landpads"
            element={
              <Index>
                <ListPage
                  title="Landpads"
                  desc="Beberapa media peluncuran"
                  condition="landpads"
                ></ListPage>
              </Index>
            }
          ></Route>
          <Route
            path="/landpads/:id"
            element={
              <Index>
                <DetailPage
                  title="Landpads"
                  desc="Beberapa media peluncuran"
                  condition="landpads"
                ></DetailPage>
              </Index>
            }
          ></Route>
          <Route
            path="/launchpads"
            element={
              <Index>
                <ListPage
                  title="Launchpad"
                  desc="Beberapa media peluncuran"
                  condition="launchpads"
                ></ListPage>
              </Index>
            }
          ></Route>
          <Route
            path="/launchpads/:id"
            element={
              <Index>
                <DetailPage
                  title="Launchpad"
                  desc="Beberapa media peluncuran"
                  condition="launchpads"
                ></DetailPage>
              </Index>
            }
          ></Route>
          <Route
            path="/crew"
            element={
              <Index>
                <ListPage
                  title="Crew"
                  desc="Beberapa tim crew"
                  condition="crew"
                ></ListPage>
              </Index>
            }
          ></Route>
          <Route
            path="/crew/:id"
            element={
              <Index>
                <DetailPage
                  title="Crew"
                  desc="Beberapa tim crew"
                  condition="crew"
                ></DetailPage>
              </Index>
            }
          ></Route>
          <Route
            path="/payloads"
            element={
              <Index>
                <ListPage
                  title="Payloads"
                  desc="Beberapa payloads"
                  condition="payloads"
                ></ListPage>
              </Index>
            }
          ></Route>
          <Route
            path="/payloads/:id"
            element={
              <Index>
                <DetailPage
                  title="Payloads"
                  desc="Beberapa payloads"
                  condition="payloads"
                ></DetailPage>
              </Index>
            }
          ></Route>
          <Route
            path="/roadster"
            element={
              <Index>
                <DetailPage
                  title="Roadster"
                  desc="Jelajah perjalanan Roadster Mission"
                  condition="roadster"
                ></DetailPage>
              </Index>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "./components/Container/Container.styled";
import Navigation from "./components/Navigation/Navigation";
import Spinner from "./components/Spinner/Spinner";
import Toast from "./components/Toast/Toast";

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage.jsx" )
);

const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage.jsx" )
);

const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage.jsx" 
  )
);

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/movies" exact>
              <MoviesPage />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>

            <Redirect to="/" />
          </Switch>
        </Suspense>
        <Toast />
      </Container>
    </>
  );
}

export default App;
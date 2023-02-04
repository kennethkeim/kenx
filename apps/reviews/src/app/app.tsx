// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Reviews from './reviews/reviews';

export function App() {
  return (
    <>
      {/* <header><h1>Header</h1></header> */}
      {/* <nav>main navigation in here</nav> */}

      <main>
        <Reviews />
      </main>

      {/* And here is our main footer that is used across all the pages of our website */}
      {/* <footer>footer content in here</footer> */}
    </>
  );
}

export default App;

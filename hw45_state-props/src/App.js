
import './App.css';
import "./style.scss";
import Header from './Header';
import Banner from './Banner';
import Blog from './Blog';
import News from './News';


function App() {
  return (
    <>
      <Header title = 'Blog name' />,
      <Banner bannerTitle = 'Full-width banner image'/>

      <main className='main-content'>
        <Blog/>
        <News/>
      </main>
    </>
  )
}

export default App;

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Search_Bar from './components/search_bar';
import Icons from './components/icons';


function App() {
  return (
    <>
      <div className="container-fluid">

        <Search_Bar />
        <Icons />
      </div>
    </>
  )
}
export default App;

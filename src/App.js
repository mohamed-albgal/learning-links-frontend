import './App.css';
import { Auth, API } from "aws-amplify";

const handleClick = async (event) => {
  event.preventDefault()
  try {
    await Auth.signIn("malbgal@gmail.com", "Password123!");
    const apiName = "links";
    const path = '/links'
    const resp = await API.get(apiName, path);
    console.log(resp);

  }catch (e) {
    console.log(e.message)
    console.log(e);
    alert(e.message);
  }

}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>Log in for malbgal.com</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

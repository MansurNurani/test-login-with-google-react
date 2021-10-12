import './App.css';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import Login from './Login';

const responseGoogle = (response) => {
  console.log("aaa", response);
}
const logOut = () => {
  console.log("logout");
}
function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;

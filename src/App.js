import './App.css';
import { Auth } from 'aws-amplify';
import AppContainer from './components/containers/AppContainer'


const App = () => {
  return (
    <div>
      <AppContainer>
      <div className='bg-green-600'> 
        <p> Layout child</p>
      </div>
      </AppContainer>
    </div>
  )
};  
export default App;

import { Route, Switch } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import RegisterForm from './components/Register/RegisterForm';
import LoginForm from './components/Login/LoginForm';

import './App.css';

function App() {
	return (
		<div className="root">
			<Switch>
				<Route path="/auth" exact component={AuthPage} />
				<Route path="/auth/register" exact component={RegisterForm} />
				<Route path="/auth/login" exact component={LoginForm} />
			</Switch>
		</div>
	);
}

export default App;

import { Route, Switch } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CreateTask from './components/Create';

import './App.css';

function App() {
	return (
		<div className="root">
			<Switch>
				<Route path="/auth" exact component={AuthPage} />
				<Route path="/auth/register" component={RegisterPage} />
				<Route path="/auth/login" component={LoginPage} />
				<Route path="/data/create" component={CreateTask} />
			</Switch>
		</div>
	);
}

export default App;

import { useState, useMemo } from 'react'
import './App.css'
import { Route, Routes, } from 'react-router-dom'
import GlobalContext from "../src/share/GlobalContext"
import Home from './pages/Home'
import CalEvent from './pages/CalEvent'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import MultipleSelect from './components/MultipleSelect'
import Error from './pages/Error'
import SnackBarMessage from '../src/share/SnackBarMessage'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Login from './components/Login'
import CardProfile from './components/CardProfile'
import CardLocation from './components/CardLocation'
import CalcuForm from './components/CalcuForm'

function App() {
	const [status, setStatus] = useState('');
	const [user, setUser] = useState(null);
	const [isAuthorize, setIsAuthorize] = useState(false)
	const [appear, setAppear] = useState(false);
	const generatekey = () => {
		return Math.random();
	};


	const globalContextValue = useMemo(() => {
		return {
			user,
			status,
			setUser,
			setStatus,
			isAuthorize,
			setIsAuthorize
		};
	}, [user]);


	return (
		<GlobalContext.Provider value={globalContextValue}>
			<Routes>
				<Route exect path="/" element={<Home />} />
				<Route path="/cal-event" element={<CalEvent />} />
				<Route path="/auth" element={<Auth />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="*" element={<Error />} />
			</Routes>

			{status ? (
				<SnackBarMessage key={generatekey()} open={status.open} severity={status.severity} message={status.msg} />
			) : null}

			{appear ? (
				<div>
					<Home />
					<MultipleSelect />
					<CalEvent />
					<Register />
					<Profile />
					<Navbar />
					<Login />
					<CardProfile />
					<Auth />
					<Table />
					<CardLocation />
					<CalcuForm />
				</div>
			) : null}
		</GlobalContext.Provider >
	)
}

export default App
import { useState, useMemo } from 'react'
import './App.css'
import { Route, Routes, } from 'react-router-dom'
import GlobalContext from "../src/share/GlobalContext"
import Home from './pages/Home'
import CalEvents from './pages/CalEvents'

function App() {
	const [status, setStatus] = useState('');
	const [user, setUser] = useState(false);
	const generatekey = () => {
		return Math.random();
	};


	const globalContextValue = useMemo(() => {
		return {
			user,
			status,
			setUser,
			setStatus,
		};
	}, [user]);


	return (
		<GlobalContext.Provider value={globalContextValue}>
			<Routes>
				<Route exect path="/" element={<Home />} />
				<Route path="/cal-events" element={<CalEvents />} />
			</Routes>

			{status ? (
				<SnackBarMessage key={generatekey()} open={status.open} severity={status.severity} message={status.msg} />
			) : null}
		</GlobalContext.Provider >
	)
}

export default App

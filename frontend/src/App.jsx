import { useState, useMemo } from 'react'
import './App.css'
import { Route, Routes, } from 'react-router-dom'
import GlobalContext from "../src/share/GlobalContext"
import Home from './pages/Home'
import CalEvent from './pages/CalEvent'
import MultipleSelect from './components/MultipleSelect'
import Error from './pages/Error'
import SnackBarMessage from '../src/share/SnackBarMessage'


function App() {
	const [status, setStatus] = useState('');
	const [user, setUser] = useState(false);
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
		};
	}, [user]);


	return (
		<GlobalContext.Provider value={globalContextValue}>
			<Routes>
				<Route exect path="/" element={<Home />} />
				<Route path="/cal-event" element={<CalEvent />} />
				<Route path="*" element={<Error />} />
			</Routes>

			{status ? (
				<SnackBarMessage key={generatekey()} open={status.open} severity={status.severity} message={status.msg} />
			) : null}

			{appear ? (
				<div>
					<Home />
					<MultipleSelect />
					<CalEvents />
				</div>
			) : null}
		</GlobalContext.Provider >
	)
}

export default App

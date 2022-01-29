import Header from './components/Header'
import { useState } from 'react'

import GlobalStyle from './styles/global'
import { IDataAddress } from './interfaces/IDataAddress'

function App() {
	const [address, setAddress] = useState({} as IDataAddress)

	return (
		<>
			<GlobalStyle />

			<>
				<Header address={address} setAddress={setAddress} />

				<h1>{address.code}</h1>
			</>
		</>
	)
}

export default App

import Header from './components/Header'
import { useState } from 'react'

import GlobalStyle from './styles/global'
import { CardContainer } from './styles/Main'

import CardAddress from './components/CardAddress'
import { IDataAddress } from './interfaces/IDataAddress'

function App() {
	const [address, setAddress] = useState({} as IDataAddress)

	return (
		<>
			<GlobalStyle />

			<>
				<Header address={address} setAddress={setAddress} />

				{address.ok && (
					<CardContainer>
						<CardAddress data={address} />
					</CardContainer>
				)}
			</>
		</>
	)
}

export default App

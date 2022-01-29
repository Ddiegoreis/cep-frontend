import React, { useState } from 'react'

import InputCep from '../InputCep'
import SubmitButton from '../SubmitButton'
import { IDataAddress } from '../../interfaces/IDataAddress'

import { Container, Title, InputsContainer } from './styles'

interface IHeaderProps {
	address: IDataAddress
	setAddress: (setAddress: IDataAddress) => void
}

function Header({ address, setAddress }: IHeaderProps) {
	const [cep, setCep] = useState('')

	return (
		<Container>
			<Title>Cep Explorer</Title>

			<InputsContainer>
				<InputCep cep={cep} setCep={setCep} />

				<SubmitButton cep={cep} setAddress={setAddress} />
			</InputsContainer>
		</Container>
	)
}

export default Header

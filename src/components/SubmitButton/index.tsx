import { FiSearch } from 'react-icons/fi'

import api from '../../services/api'

import { IDataAddress } from '../../interfaces/IDataAddress'
import { StyledInputSubmit } from './styles'

interface IPropsSubmitCep {
	cep: string
	setAddress: (setAddress: IDataAddress) => void
}

function SubmitButton({ cep, setAddress }: IPropsSubmitCep) {
	function handleSubmit() {
		const apiRoute = `cep/${cep.replace('.', '').replace('-', '')}`

		api.get(apiRoute).then((response) => setAddress(response.data))
	}

	return (
		<StyledInputSubmit type={'submit'} onClick={handleSubmit}>
			<FiSearch />
		</StyledInputSubmit>
	)
}

export default SubmitButton

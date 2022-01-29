import { FiSearch } from 'react-icons/fi'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import api from '../../services/api'

import { IDataAddress } from '../../interfaces/IDataAddress'
import { StyledInputSubmit } from './styles'

interface IPropsSubmitCep {
	cep: string
	setAddress: (setAddress: IDataAddress) => void
}

toast.configure()

function SubmitButton({ cep, setAddress }: IPropsSubmitCep) {
	function notifyAlert() {
		toast('O CEP não pode ser vazio!', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: true,
			draggable: true,
		})
	}

	function handleSubmit() {
		if (cep === '') {
			notifyAlert()

			setAddress({} as IDataAddress)

			return
		}

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

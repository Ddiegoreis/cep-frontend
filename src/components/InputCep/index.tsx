import { StyledInputCep } from './styles'

interface IPropsInputCep {
	cep: string
	setCep: (setCeo: string) => void
}

function InputCep({ cep, setCep }: IPropsInputCep) {
	function onCepChange(e: React.ChangeEvent<HTMLInputElement>) {
		setCep(e.target.value)
	}

	return (
		<StyledInputCep type={'text'} onChange={onCepChange} mask='99999-999' />
	)
}

export default InputCep

import { StyledInputCep } from './styles'

interface IPropsInputCep {
	setCep: (setCeo: string) => void
}

function InputCep({ setCep }: IPropsInputCep) {
	function onCepChange(e: React.ChangeEvent<HTMLInputElement>) {
		setCep(e.target.value)
	}

	return (
		<StyledInputCep type={'text'} onChange={onCepChange} mask='99999-999' />
	)
}

export default InputCep

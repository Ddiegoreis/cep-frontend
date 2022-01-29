import { IDataAddress } from '../../interfaces/IDataAddress'
import { AddressText, City, Container, TopAddres } from './styles'

interface IPropsCardAddress {
	data: IDataAddress
}

function CardAddress({ data }: IPropsCardAddress) {
	return (
		<Container>
			<TopAddres>
				<span>{data.state}</span>
				<span>{data.code}</span>
			</TopAddres>
			<City>{data.city}</City>
			<AddressText>{`${data.district} - ${data.address}`}</AddressText>
		</Container>
	)
}

export default CardAddress

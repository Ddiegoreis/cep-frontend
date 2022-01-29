import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-size: 1em;
		font-family: 'Inter';
		color: #121214;
		background-color: #f9f9f9;
	}
`

export default GlobalStyle
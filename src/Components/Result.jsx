import { styled } from 'styled-components'

const H1 = styled.h1`
	background: linear-gradient(40deg, #00dd12, #03d5ff, #08fc75);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 3.2rem;
	line-height: 1.5;
`
export default function Result({ choice = null }) {
	return (
		<div>
			<H1>{choice}</H1>
		</div>
	)
}
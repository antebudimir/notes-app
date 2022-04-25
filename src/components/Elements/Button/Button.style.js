import styled from 'styled-components';

export const ButtonContainer = styled.button`
	border-radius: ${(props) => props.theme.border.secondary};
	box-shadow: ${(props) => props.theme.shadow.primary};
	display: inline-block;
	width: 100%;
	padding: ${(props) => props.theme.spacing.primary};
	background: ${(props) => props.theme.color.tertiary};
	color: ${(props) => props.theme.color.secondary};
	font-size: ${(props) => props.theme.fontSize.primary};
	text-transform: uppercase;
	font-weight: bold;
	transition: color, ${(props) => props.theme.timing.primary};
	cursor: pointer;

	&:hover,
	&:focus {
		background: ${(props) => props.theme.color.senary};
		color: ${(props) => props.theme.color.primary};
		transition: all ${(props) => props.theme.timing.primary};
	}
`;

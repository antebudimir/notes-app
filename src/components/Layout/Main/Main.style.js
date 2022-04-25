import styled from 'styled-components';

export const MainContainer = styled.main`
	box-shadow: ${(props) => props.theme.shadow.primary};
	border-radius: ${(props) => props.theme.border.secondary};
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	min-height: fit-content;
	margin: ${(props) => props.theme.spacing.primary};
	padding: ${(props) => props.theme.spacing.secondary};
	text-align: center;
	overflow: auto;

	@media screen and (min-width: 800px) {
		max-width: ${(props) => props.theme.sizing.mainWidth};
		margin: ${(props) => props.theme.spacing.secondary} auto;
	}
`;

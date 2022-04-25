import styled from 'styled-components';

export const Text = styled.p`
	margin-block-start: ${(props) => props.theme.spacing.primary};
	color: ${(props) => props.theme.color.primary};
	font-size: ${(props) => props.theme.fontSize.secondary};
`;

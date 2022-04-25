import styled from 'styled-components';
import mixins from 'styles/mixins';

export const FormControl = styled.div``;

export const FieldLabel = styled.label`
	${mixins.hiddenVisually};
`;

export const FieldInput = styled.input`
	outline: ${(props) => props.theme.border.primary}
		${(props) => props.theme.color.quinary} solid;
	border-radius: ${(props) => props.theme.border.secondary};
	box-shadow: ${(props) => props.theme.shadow.primary};
	width: ${(props) => props.theme.sizing.primary};
	padding: ${(props) => props.theme.spacing.primary};
	color: ${(props) => props.theme.color.quinary};
	font-size: ${(props) => props.theme.fontSize.secondary};
	text-align: center;

	&:last-of-type {
		margin-block-end: ${(props) => props.theme.spacing.primary};
	}

	&:hover,
	&:focus {
		outline: ${(props) => props.theme.border.primary}
			${(props) => props.theme.color.tertiary} solid;
	}
`;

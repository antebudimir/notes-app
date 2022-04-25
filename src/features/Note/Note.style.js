import styled from 'styled-components';
import mixins from 'styles/mixins';

export const ListItem = styled.li`
	position: relative;
	border-radius: ${(props) => props.theme.border.secondary};
	box-shadow: ${(props) => props.theme.shadow.primary};
	margin-block: ${(props) => props.theme.spacing.primary};
	padding: ${(props) => props.theme.spacing.primary};
	background-color: ${(props) =>
		props.noteComplete
			? props.theme.color.senary
			: props.theme.color.quaternary};
	color: ${(props) => props.theme.color.primary};
	font-size: ${(props) => props.theme.fontSize.tertiary};
	word-break: break-all;

	&:hover,
	&:focus {
		transform: skew(-10deg);
		transition: transform ${(props) => props.theme.timing.primary};
	}
`;

export const CheckboxContainer = styled.span`
	position: absolute;
	bottom: ${(props) => props.theme.spacing.checkboxBottom};
	left: ${(props) => props.theme.spacing.primary};
	color: ${(props) => props.theme.color.tertiary};
`;

export const CheckboxLabel = styled.label`
	${mixins.hiddenVisually};
`;

export const CheckboxInput = styled.input`
	cursor: pointer;
	transform: scale(1.5);

	&:hover,
	&:focus {
		transform: scale(2);
		transition: transform ${(props) => props.theme.timing.primary};
	}
`;

export const Icon = styled.i`
	position: absolute;
	right: ${(props) => props.theme.spacing.primary};
	bottom: ${(props) => props.theme.spacing.closeIconBottom};
	color: ${(props) => props.theme.color.secondary};
	cursor: pointer;

	&:hover,
	&:focus {
		color: ${(props) => props.theme.color.septenary};
		transform: scale(1.5);
		transition: transform ${(props) => props.theme.timing.primary};
	}
`;

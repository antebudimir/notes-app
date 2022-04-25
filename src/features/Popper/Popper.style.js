import styled from 'styled-components';
import Button from 'components/Elements/Button/Button';

export const PopperButton = styled(Button)`
	outline: ${(props) => props.theme.border.primary}
		${(props) => props.theme.color.quinary} solid;
	width: fit-content;
	margin-block: ${(props) => props.theme.spacing.primary};
	margin-inline: auto;
	background-color: initial;
	color: ${(props) => props.theme.color.quinary};

	&:hover,
	&:focus {
		background-color: initial;
	}
`;

export const PopperContainer = styled.div`
	border-radius: ${(props) => props.theme.border.secondary};
	box-shadow: ${(props) => props.theme.shadow.primary};
	padding: ${(props) => props.theme.spacing.primary};
	padding: calc(${(props) => props.theme.spacing.primary} - 0.1rem);
	background-color: ${(props) => props.theme.color.septenary};
	color: ${(props) => props.theme.color.secondary};
	text-align: center;

	&[data-popper-placement^='top'] > div {
		z-index: ${(props) => props.theme.zIndex.popperTop};
		bottom: ${(props) => props.theme.spacing.popperPlacementTop};
	}

	&[data-popper-placement^='bottom'] > div {
		bottom: ${(props) => props.theme.spacing.popperPlacementBottom};
	}
`;

export const PopperArrow = styled.div`
	position: absolute;
	width: ${(props) => props.theme.sizing.popperArrowWidth};
	height: ${(props) => props.theme.sizing.popperArrowHeight};

	&:after {
		content: ' ';
		position: absolute;
		left: 0;
		transform: rotate(45deg);
		width: ${(props) => props.theme.sizing.popperArrowWidthAfter};
		height: ${(props) => props.theme.sizing.popperArrowHeightAfter};
		background-color: ${(props) => props.theme.color.septenary};
	}
`;

export const PopperText = styled.p`
	font-weight: bold;
`;

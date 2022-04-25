import styled from 'styled-components';
import Section from 'components/Elements/Section/Section';

export const NotesContainer = styled(Section)`
	margin-block: ${(props) => props.theme.spacing.primary};
`;

export const NotesHeading = styled.h2`
	margin-block: ${(props) => props.theme.spacing.primary};
	font-size: ${(props) => props.theme.fontSize.tertiary};
`;

import styled from 'styled-components';
import mixins from 'styles/mixins';
import Image from 'components/Elements/Image/Image';

export const HeaderContainer = styled.header`
	padding: ${(props) => props.theme.spacing.primary};
	box-shadow: ${(props) => props.theme.shadow.secondary};
`;

export const HeaderTitle = styled.h1`
	${mixins.hiddenVisually}
`;

export const HeaderLogo = styled(Image)`
	width: ${(props) => props.theme.sizing.logoPrimary};
	height: auto;
	margin: auto;

	@media screen and (min-width: 800px) {
		width: ${(props) => props.theme.sizing.logoSecondary};
	}
`;

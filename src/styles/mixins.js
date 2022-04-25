import { css } from 'styled-components';

const hiddenVisually = css`
	position: absolute;
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	overflow: hidden;
	width: 1px;
	height: 1px;
	white-space: nowrap;
`;

const sticky = css`
	display: flex;
	flex-flow: column nowrap;
	min-height: 100vh;
`;

const mixins = { hiddenVisually, sticky };
export default mixins;

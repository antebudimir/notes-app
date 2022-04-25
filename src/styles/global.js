import { createGlobalStyle } from 'styled-components';
import RalewayRegular from 'fonts/Raleway-Regular.woff';
import RalewayBold from 'fonts/Raleway-Bold.woff';

export const GlobalStyles = createGlobalStyle`
@font-face {
	font-family: 'Raleway Regular';
	src: url(${RalewayRegular}) format('woff');
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'Raleway Bold';
	src: url(${RalewayBold}) format('woff');
	font-weight: bold;
	font-style: normal;
	font-display: swap;
}

* {
	outline: none;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	scroll-behavior: smooth;
}

html {
	font-family: 'Raleway Regular';
}

button,
input {
	font-family: 'Raleway Bold';
}

ul,
li {
	list-style: none;
}

a {
	text-decoration: none;
}

input,
button {
	border: none;
	display: block;
}

img {
	display: block;
	max-width: 100%;
}
`;

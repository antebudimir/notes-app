import { ThemeProvider } from 'styled-components';
import { variables } from './styles/variables';
import { GlobalStyles } from 'styles/global';
import Home from 'components/Pages/Home';

const App = () => {
	return (
		<ThemeProvider theme={variables}>
			<GlobalStyles />
			<div className="App">
				<Home />
			</div>
		</ThemeProvider>
	);
};

export default App;

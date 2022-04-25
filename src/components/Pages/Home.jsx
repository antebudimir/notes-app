import { Fragment } from 'react';
import Header from 'components/Layout/Header/Header';
import Main from 'components/Layout/Main/Main';
import Form from 'features/NewNoteForm/NewNoteForm';
import Popper from 'features/Popper/Popper';
import Notes from 'features/Notes/Notes';

const Home = () => {
	return (
		<Fragment>
			<Header />

			<Main>
				<Form />

				<Popper />

				<Notes />
			</Main>
		</Fragment>
	);
};

export default Home;

import PropTypes from 'prop-types';
import { FieldInput, FieldLabel, FormControl } from './InputGroup.style';

const InputGroup = ({ name, label, type, placeholder, value, setInput }) => {
	const onChangeHandler = (e) => {
		const { value } = e.target;

		setInput(value);
	};

	return (
		<FormControl>
			<FieldLabel htmlFor={name}>{label}</FieldLabel>

			<FieldInput
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChangeHandler}
				required
			/>
		</FormControl>
	);
};

InputGroup.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['text', 'number', 'password']).isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	setInput: PropTypes.func.isRequired,
};

export default InputGroup;

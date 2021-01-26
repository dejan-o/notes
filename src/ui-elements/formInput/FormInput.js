import React, { useState, useContext } from 'react';
import { ListContext } from '../list/ListProvider';

const FormInput = () => {
	const [input, setInput] = useState('');
	const { addListItem } = useContext(ListContext); 

	const onSubmit = (input) => {
		addListItem(input);
		setInput('');   
	};

	return (
		<div>
			<input type="text" onChange={((event)=> setInput(event.target.value))} value={input}/>
			<button disabled={!(input.trim())} onClick={() => onSubmit(input)}>+</button>
		</div>
	);
};


export default FormInput;
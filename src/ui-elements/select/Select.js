import React, { useContext } from 'react';
import { SelectContext } from './SelectProvider';


const Select = () => {

	const { onChange } = useContext(SelectContext);

	return (
		<select name='itemsType' onChange={onChange}>
			<option value='toDo' defaultChecked>toDo</option>
			<option value="textNote">textNote</option>
		</select>
	);
};

export default Select;
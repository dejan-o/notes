import React, { useState, createContext } from 'react';

export const SelectContext = createContext({
	itemsType: 'toDo',
	onChange: () => {},
});
    
const SelectProvider = ({ children }) => {
	const [ itemsType, setItemsType ] = useState('toDo');
    
	const onChange = item => setItemsType(item.target.value);
	return <SelectContext.Provider value={{ onChange, itemsType }}>{children}</SelectContext.Provider>;
};

export default SelectProvider;
    

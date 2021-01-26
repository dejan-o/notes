import React, { useState, createContext, useContext } from 'react';
import { SelectContext } from '../select/SelectProvider';
import { useLocalStorageState } from '../../utils';
import List from './List';
   

export const ListContext = createContext({
	list: {
		toDo: [],
		textNote: [],    
	},
	addListItem: () => {},
	removeListItem: () => {},
	toggleIsDone: () => {},
});
    
const ListProvider = ({ children }) => {
	const [ list, setList ] = useLocalStorageState('list', {
		toDo: [],
		textNote: [],    
	});
	const { itemsType } = useContext(SelectContext);
	const addListItem = item => setList({ ...list, [itemsType]: [...list[itemsType], { id: list[itemsType].length, value: item }] });
	const removeListItem = id => setList({ ...list, [itemsType]: list[itemsType].filter( element => element.id !== id) });
	const toggleIsDone = id => setList({ ...list, [itemsType]: list[itemsType].map( element => {
		if(element.id === id)
			return element.done ? { ...element, done: false } : { ...element, done: true };
		return element;
	}) });

	console.log(list[itemsType]);
	return <ListContext.Provider value={{ toggleIsDone, removeListItem, addListItem, list: list[itemsType] }}>{children}</ListContext.Provider>;
};

export default ListProvider;
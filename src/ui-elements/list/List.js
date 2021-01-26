import React, { useContext } from 'react';
import { ListContext } from './ListProvider';
import { SelectContext } from '../select/SelectProvider';
import ListItem from './ListItem';

const renderList = (list, itemsType, removeListItem, toggleIsDone) => {
	return list.map( item => <ListItem key={item.id} id={item.id} isDone={item.done} value={item.value} removeListItem={removeListItem} itemsType={itemsType} toggleIsDone={toggleIsDone}/> );
};


const List = () => {

	const { list, removeListItem, toggleIsDone } = useContext(ListContext);
	const { itemsType } = useContext(SelectContext);

	return (
		<ul className="list">
			{
				renderList(list, itemsType, removeListItem, toggleIsDone)
			}
		</ul>
	);
};


export default List;
import React, { Fragment } from 'react';

const ListItem = ({ id, removeListItem, value, isDone, itemsType, toggleIsDone }) => {
	console.log(id);
	return (
		<div className="listItem">
			{ itemsType === 'toDo' ?
				<Fragment><span className={`item toDoItem ${isDone ? 'green' : null}`} onClick={() => toggleIsDone(id)}>{value}</span> <span className="rmButton" onClick={()=> removeListItem(id)}>x</span></Fragment>
				:
				<Fragment><span className='item textItem'>{value}</span> <span className="rmButton" onClick={()=> removeListItem(id)}>x</span></Fragment>
			}
		</div> 
            
        
	);
};

export default ListItem;
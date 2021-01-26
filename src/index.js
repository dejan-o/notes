import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormInput from './ui-elements/formInput/FormInput';
import List from './ui-elements/list/List';
import ListProvider from './ui-elements/list/ListProvider';
import Select from './ui-elements/select/Select';
import SelectProvider from './ui-elements/select/SelectProvider';

const App = () => {
	return (<div className="app">
		<div className="header">
			<h2>Notes</h2>
			<FormInput />
			<Select />
		</div>
		<List />
	</div>);
};






ReactDOM.render(
	<SelectProvider>
		<ListProvider>
			<App />
		</ListProvider>
	</SelectProvider>, 
	document.getElementById('root'));
                
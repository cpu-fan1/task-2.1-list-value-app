// import logo from './logo.svg';
// import { Error } from './Error';
import { useState } from 'react';
import styles from './App.module.css';
import moment from 'moment';
import 'moment/locale/ru';

function App() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const isValueValid = value.length >= 3;

	if (!isValueValid && value !== '' && error === '') {
		setError('Введенное значение должно содержать минимум 3 символа');
	} else if (isValueValid && error !== '') {
		setError('');
	}

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение')?.trim();
		setValue(promptValue);
	};

	const onAddButtonClick = () => {
		if (isValueValid) {
			setList([...list, { id: Date.now(), value }]);
			setValue('');
		}
	};

	function getDate(date) {
		return moment(date).locale('ru').format('LLL');
	}

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			<div className={styles.error}>{error}</div>
			<div className={styles['buttons-container']}>
				<button onClick={onInputButtonClick} className={styles.button}>
					Ввести новое
				</button>
				<button
					onClick={onAddButtonClick}
					className={styles.button}
					disabled={!isValueValid}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{list.length === 0 && (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				)}
				<ul className={styles.list}>
					{list.map(({ id, value }) => (
						<li key={id}>
							<output className={styles.date}>
								{getDate(new Date())} -{' '}
							</output>
							{value}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;

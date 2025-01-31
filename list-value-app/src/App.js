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

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение')?.trim();
		setValue(promptValue);

		if (promptValue && promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
		} else {
			setError('');
		}
	};

	const onAddButtonClick = () => {
		if (isValueValid) {
			setList((prevList) => [
				...prevList,
				{ id: Date.now(), value, date: new Date() },
			]);
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
				{list.length ? (
					<ul className={styles.list}>
						{list.map(({ id, value, date }) => (
							<li key={id}>
								<output className={styles.date}>
									{getDate(date)} -{' '}
								</output>
								{value}
							</li>
						))}
					</ul>
				) : (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				)}
			</div>
		</div>
	);
}

export default App;

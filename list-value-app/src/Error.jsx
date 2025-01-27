import { useState } from 'react';
import styles from './App.module.css';

export function Error({value}) {
	const [error, setError] = useState('');

	value.length >= 3 ? setError('') : setError('Введенное значение должно содержать минимум 3 символа');

	return (
		<div className={styles.error}>{error}</div>
	);

}

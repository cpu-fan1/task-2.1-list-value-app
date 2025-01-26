import { useState } from 'react';
import styles from './App.module.css';

export function Error(props) {
	const [error, setError] = useState('');

	if (props.value.length >= 3) {
		setError('');
	} else {
		setError('Введенное значение должно содержать минимум 3 символа');
	}

	return (
		<div className={styles.error}>{error}</div>
	);

}

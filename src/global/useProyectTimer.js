import { useEffect } from 'react';
import { useTimer } from './useTimer';
import { useTimerStore } from './timeStore';

export function useProyectoTimer(proyecto) {
	const { tiempo, isRunning, toggleTimer } = useTimer();

	const { initTimer, stopTimer } = useTimerStore((state) => state);

	useEffect(() => {
		if (proyecto) {
			initTimer(proyecto);
		}
		return () => stopTimer();
	}, [proyecto]);

	return {
		tiempo,
		isRunning,
		toggleTimer,
	};
}

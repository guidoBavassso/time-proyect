import { useTimerStore } from './timeStore';

export function useTimer() {
	const { seconds, isRunning, toggleTimer } = useTimerStore((state) => state);

	const formatTime = (totalSeconds) => {
		const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
		const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
		const secs = String(totalSeconds % 60).padStart(2, '0');
		return [hours, minutes, secs];
	};

	const tiempo = formatTime(seconds);

	return { tiempo, toggleTimer, isRunning };
}

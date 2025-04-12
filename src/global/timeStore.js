import { create } from 'zustand';
import { getProjectTime, saveProjectTime } from '../functions/timerStorage';
// import { getProjectTime, saveProjectTime } from '../utils/timerStorage';

export const useTimerStore = create((set, get) => ({
	seconds: 0,
	isRunning: false,
	intervalId: null,
	proyecto: null,

	initTimer: (proyecto) => {
		const savedSeconds = getProjectTime(proyecto);
		set({ proyecto, seconds: savedSeconds });
	},

	startTimer: () => {
		if (get().intervalId) return;

		const interval = setInterval(() => {
			set((state) => ({ seconds: state.seconds + 1 }));
		}, 1000);

		set({ isRunning: true, intervalId: interval });
	},

	stopTimer: () => {
		const { intervalId, proyecto, seconds } = get();

		clearInterval(intervalId);
		set({ isRunning: false, intervalId: null });

		if (proyecto) {
			saveProjectTime(proyecto, seconds);
		}
	},

	toggleTimer: () => {
		const { isRunning, startTimer, stopTimer } = get();
		isRunning ? stopTimer() : startTimer();
	},

	resetTimer: () => {
		set({ seconds: 0 });
	},
}));

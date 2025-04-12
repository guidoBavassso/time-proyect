import { create } from 'zustand';

const useHeaderStore = create((set) => ({
	headerOpen: false,
	setHeaderOpen: (value) => set({ headerOpen: value }),
	toggleHeader: () => set((state) => ({ headerOpen: !state.headerOpen })),
}));

export default useHeaderStore;

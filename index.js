function compareDates(date1, date2) {
	return date1.getTime() === date2.getTime();
}

function createTextWithVoice(text, voice) {
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.voice = voice;
	speechSynthesis.speak(utterance);
}

function createStore() {
	let store = {
		voices: [],
		voice: null,
		text: '',
		date: new Date(),
	};

	return {
		getStore: () => store,
		setStore: (newStore) => {
			store = { ...store, ...newStore };
		},
	};
}

export { compareDates, createTextWithVoice, createStore }
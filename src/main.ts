import App from './App.svelte';
// import "bootstrap"

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;

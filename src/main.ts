import SvelteApp from './App.svelte'

const app = new SvelteApp({
	target: document.body,
	props: {
		name: 4
	}
})

export default app

<script context="module" lang="ts">
	import { enhance } from '$lib/form';
	import type { Load } from '@sveltejs/kit';

	// see https://kit.svelte.dev/docs#loading
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/todos.json');

		if (res.ok) {
			const todos = await res.json();

			return {
				props: { todos }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	type Todo = {
		uid: string;
		created_at: Date;
		text: string;
		done: boolean;
		pending_delete: boolean;
	};

	export let todos: Todo[];

	async function patch(res: Response) {
		const todo = await res.json();

		todos = todos.map((t) => {
			if (t.uid === todo.uid) return todo;
			return t;
		});
	}
</script>

<svelte:head>
	<title>Todos</title>
</svelte:head>

<div class="todos">
	<h1>Todos</h1>

	<form
		class="new"
		action="/todos.json"
		method="post"
		use:enhance={{
			result: async (res, form) => {
				const created = await res.json();
				todos = [...todos, created];

				form.reset();
			}
		}}
	>
		<rux-input
			name="text"
			label="Add todo"
			aria-label="Add todo"
			placeholder="+ tap to add a todo"
		/>
		<rux-button type="submit">Submit</rux-button>
	</form>

	{#each todos as todo (todo.uid)}
		<div
			class="todo"
			class:done={todo.done}
			transition:scale|local={{ start: 0.7 }}
			animate:flip={{ duration: 200 }}
		>
			<form
				action="/todos/{todo.uid}.json?_method=patch"
				method="post"
				use:enhance={{
					pending: (data) => {
						todo.done = !!data.get('done');
					},
					result: patch
				}}
			>
				<rux-checkbox
					type="hidden"
					aria-label="Mark todo as {todo.done ? 'not done' : 'done'}"
					name="done"
					value={todo.done ? '' : 'true'}
				/>
			</form>

			<form
				class="text"
				action="/todos/{todo.uid}.json?_method=patch"
				method="post"
				use:enhance={{
					result: patch
				}}
			>
				<rux-input aria-label="Edit todo" type="text" name="text" value={todo.text} />
				<rux-button class="save" aria-label="Save todo" type="submit">Save</rux-button>
			</form>

			<form
				action="/todos/{todo.uid}.json?_method=delete"
				method="post"
				use:enhance={{
					pending: () => (todo.pending_delete = true),
					result: () => {
						todos = todos.filter((t) => t.uid !== todo.uid);
					}
				}}
			>
				<rux-button
					class="delete"
					type="submit"
					aria-label="Delete todo"
					disabled={todo.pending_delete}>Delete</rux-button
				>
			</form>
		</div>
	{/each}
</div>

<style>
	.todos {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
	}

	.new {
		margin: 0 0 0.5rem 0;
		display: flex;
		align-items: flex-end;
	}

	.new rux-input {
		flex-basis: 100%;
		margin-right: 20px;
	}
	.todo {
		display: grid;
		grid-template-columns: 0.05fr 1fr 0.05fr;
		grid-gap: 0.5rem;
		align-items: center;
		margin: 0 0 0.5rem 0;
		padding: 0.5rem;
		background-color: var(--color-surface);
		border-radius: 3px;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
		transform: translate(-1px, -1px);
		transition: filter 0.2s, transform 0.2s;
	}

	.done {
		transform: none;
		opacity: 0.4;
		filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1));
	}

	form.text {
		position: relative;
		display: flex;
		align-items: center;
	}

	form.text rux-input {
		flex-basis: 100%;
	}

	form.text rux-input::part(label) {
		display: none;
	}

	.todo rux-input {
		padding: 0.25em 1em 0.25em 0.5em;
		border-radius: 3px;
	}
</style>

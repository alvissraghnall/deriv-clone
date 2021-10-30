import type { Route } from "svelte-router-spa";
import Home from "./components/Home.svelte";
import Head from "./components/Shared.svelte";


const routes = [
    {
        name: '/',
        component: Home
    },
    {
        name: "/head",
        component: Head
    },
]


export {routes};

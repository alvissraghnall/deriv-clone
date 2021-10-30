<style>
body {
    margin: 0;
    font-family: 'Ubuntu', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

h1 {
    font-family: serif, monospace;
    font-weight: 400;
    color: #143774;
    font-size: 2rem;
    margin: 0;
}

.subtitle {
    font-weight: 700;
    color: #0f77af;
    font-size: .75rem;
    margin: 0;
}

header {
     text-align: center;
     background: rgb(238, 113, 134);
     padding: 2em 0;
    
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
}

nav li {
    
    margin: 0 1em;
}

nav a {
    text-decoration: none;
    color: #707070;
    font-weight: 700;
    padding: 0.25em 0;
}

nav a:hover,
nav a:focus {
    color: #1792d2;
}

.current-page {
    border-bottom: 1px solid #707070;
}

.current-page:hover {
    color: #707070;
}

@media (max-width: 675px) {
    .container {
        margin: 0 auto;
        width: 90%;
        display: flex;
        flex-direction: column;
    }

    .jaiye {
        flex-direction:column;

    }

    ul li {
        margin: .34em;
    }
}



@media (min-width: 800px) and (orientation: landscape) {
    .container {
        margin: 0 auto;
        width: 90%;
        max-width: 900px;
        
    }

    header {
        text-align: unset;
    }

    .container-nav {
        display: flex;
        justify-content: space-evenly;
    }
}

</style>

<header>
    <div class="container container-nav">
        <div class="site-title">
            <h1>Living the social life.</h1>
            <p class="subtitle">A blog exploring minimalism in real life.</p>
        </div>
        <nav>
            <ul class="jaiye">
                <li><a href="#" class="current-page">Home</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#">Recent Posts</a></li>
            </ul>
        </nav>
    </div>
    
</header>

<script>

</script>


<script>
    import {
      AppBar,
      Button,
      Icon,
      NavigationDrawer,
      Overlay,
      MaterialApp,
    } from "svelte-materialify";
    import { mdiMenu } from "@mdi/js";
  
    let theme = "dark";
    let active = false;
    function toggleNavigation() {
      active = !active;
    }
  </script>
  
  <MaterialApp {theme}>
    <div style="position:relative;height:250px">
      <AppBar class="d-flex justify-space-between">
        <div slot="icon">
          <Button
            fab
            depressed
            on:click={toggleNavigation}
            style="display: none;"
          >
            <Icon path={mdiMenu} />
          </Button>
        </div>
        <div
          slot="title"
          class="font-weight-black"
        >
          <div>
            <span> DERIV | </span>
            <span class="text--secondary ml-1"> GET TRADING</span>
          </div>
        </div>
        <div>
          <div class="d-flex flex-column nav-items" id="nav-items">
            <div class="nav-menu">Trade</div>
            <div class="nav-menu">Markets</div>
            <div class="nav-menu">About Us</div>
            <div class="nav-menu">Resources</div>
          </div>
          <Button outlined class="red-text">Log In</Button>
        </div>
        
      </AppBar>
      <NavigationDrawer style="position: relative" {active}>
        Content
      </NavigationDrawer>
      <Overlay {active} absolute on:click={toggleNavigation} index={1} />
    </div>
  </MaterialApp>
  
  <style lang="scss">
    #nav-items {
      width: 60%;
      display: flex;
      flex-direction: row-reverse;
    }
  </style>
  
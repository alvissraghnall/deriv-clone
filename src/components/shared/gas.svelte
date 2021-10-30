<script>
    import {
      AppBar,
      Button,
      Icon,
      NavigationDrawer,
      Overlay,
      Row,
      Col,
      MaterialApp,
      ProgressLinear,
    } from "svelte-materialify";
    import { mdiMenu } from "@mdi/js";
    import { onMount } from "svelte";
  
    let width = window.outerWidth;
    let active = false;
    function toggleNavigation() {
      active = !active;
    }
    onMount(() => console.log(width));
  </script>
  
  <div style="position:relative;height:250px">
    <AppBar class="d-flex justify-space-around" style="justify-content: space-around;">
        <div slot="icon">
          <Button
            fab
            depressed
            on:click={toggleNavigation}
            id="side-menu-bar"
            style={width < 996 ? "display: block;" : "display: none;"}
          >
            <Icon path={mdiMenu} />
          </Button>
        </div>
        <div slot="title" class="font-weight-black">
          <div>
            <span class="font-italic"> DERIV </span> |
            <span class="text--secondary ml-1"> GET TRADING</span>
          </div>
        </div>
        <div
          class="flex-row justify-space-around nav-menu"
          style={width > 996 ? "display: flex;" : "display: none;"}
        >
          <div class="nav-item">Trade</div>
    
          <div class="nav-item">Markets</div>
    
          <div class="nav-item">About Us</div>
    
          <div class="nav-item">Resources</div>
        </div>
        <Button outlined class="red-text login-btn">Log In</Button>
    </AppBar>
    <NavigationDrawer style="position: relative" {active}>
      Content
    </NavigationDrawer>
    <Overlay {active} absolute on:click={toggleNavigation} index={1} />
  </div>
  
  <style>
    #nav-items {
      width: 60%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    .login-btn {
      position: relative;
      right: 5%;
    }
    button#side-menu-bar {
      display: none;
    }
  
    @media (max-width: 992px) {
      .nav-item:after {
        position: absolute;
        top: 100%;
        left: 0%;
        width: 0;
        height: 2px;
        background: red;
        content: "";
        transition: width 0.5s ease-in-out;
      }
      .nav-item:hover:after {
        width: 30%;
      }
    }
  </style>
  
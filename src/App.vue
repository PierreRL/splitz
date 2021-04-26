<template>
  <div id="nav">
    <img src="./assets/images/splitz_logo.png" id="logo" />
    <router-link to="/">Splits</router-link>
    <router-link to="/pace">Pace</router-link>
    <router-link to="/time">Time</router-link>
    <router-link to="/unit-conversion">Unit Conversion</router-link>
  </div>
  <div id="body">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./styles/variables";
$nav-height: 50px;
$body-padding: 10px;
#body {
  font-family: "Roboto", sans-serif;
  color: white;
  text-align: center;
  padding: $body-padding;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMzOCIgaGVpZ2h0PSI3NTEiIHZpZXdCb3g9IjAgMCAxMzM4IDc1MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwOTcuNDEgMjk1Ljk4NUMxMTYwLjkzIDI0Mi44MDggMTI3Mi40OCAyMDQuNjgxIDEzMzggMFY3NTFIMEMxMjAuMjEyIDY4MC40MzIgNDI2Ljk2IDUzOC4xOTIgNjkyLjI1OSA1MzMuNzc3QzEwMjMuODggNTI4LjI1OCA5NTYuOTEyIDQxMy41OTkgMTA5Ny40MSAyOTUuOTg1WiIgZmlsbD0iI0ZGRUQ5MSIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPC9zdmc+Cg==),
    url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyOCIgaGVpZ2h0PSI5OTAiIHZpZXdCb3g9IjAgMCAxODI4IDk5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzNS41NDMgMTk1LjIwNEMxOTEuMzU5IDk3LjQ4NzcgNjAuMTA0MSAyNC4zNTI5IDAgMFY5OTJIMTgyNy41QzE3NTYuNTcgOTU5LjQ2NiAxNTQ5Ljg0IDkyMi42NTMgMTQ4NCA5MTlDMTQwMS43IDkxNC40MzQgMTIyOC4wNyA4NDguMTY2IDEwMTUuMjcgODUyLjE2MUM4MDIuNDcxIDg1Ni4xNTYgNjI2LjY2MiA2MzQuMTk0IDQ5NCA2MTYuNUMzNjEuMzM4IDU5OC44MDYgMjkwLjc3NCAzMTcuMzQ5IDIzNS41NDMgMTk1LjIwNFoiIGZpbGw9IiNGRjkyMkQiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPgo=),
    url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ1MSIgaGVpZ2h0PSI5OTAiIHZpZXdCb3g9IjAgMCAxNDUxIDk5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4MS44NDkgMzQ5LjQ4MkM5Ni45ODYgMzk5LjEwMSAyNS4yNTY3IDc5Ny4xNjkgMCA5OTBMMCAwTDE0NTEgMEMxMzMyLjgzIDMyLjIwNDggMTA3OC4yMSA5Ni42MTQ0IDEwMDUuMDQgOTYuNjE0NEM5MTMuNTczIDk2LjYxNDQgNzc1LjU2MyAyMTQuMTAyIDY0Mi40MjMgMjExLjcxN0M1MDkuMjg0IDIwOS4zMzEgMjg3LjkyNyAyODcuNDU4IDE4MS44NDkgMzQ5LjQ4MloiIGZpbGw9IiNGRjY0NDIiIGZpbGwtb3BhY2l0eT0iMC40NSIvPgo8L3N2Zz4K);
  background-position: bottom right, bottom left, top left;
  background-size: contain;
  min-height: calc(100vh - (#{$nav-height} + #{$body-padding * 2}));

  background-repeat: no-repeat;
  background-color: #f6d6b9;
}
#nav {
  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.57);
  position: relative;
  height: $nav-height;
  background-color: $primary-color;
  #logo {
    vertical-align: middle;
    padding: 9px;
    margin: 0 5px 0 4rem;
    /* padding: 16px; */
    max-height: calc(#{$nav-height} - 20px);
    float: left;
  }
  a {
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    /* float: left; */
    padding: 18px 18px;
    font-family: "Metropolis", sans-serif;
    font-size: 0.8rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
    &:hover {
      color: rgb(202, 202, 202);
    }
  }
}

@font-face {
  src: "./assets/fonts/Metropolis-Bold.ttf";
  font-family: "Metropolis";
}
@font-face {
  src: "./assets/fonts/Roboto-Regular.ttf";
  font-family: "Roboto";
  font-weight: normal;
}
@font-face {
  src: "./assets/fonts/Roboto-Light.ttf";
  font-family: "Roboto";
  font-weight: 300;
}
@font-face {
  src: "./assets/fonts/Roboto-Bold.ttf";
  font-family: "Roboto";
  font-weight: bold;
}
</style>

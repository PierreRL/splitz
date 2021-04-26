<template>
  <div id="body">
    <div id="nav">
      <router-link to="/">Splits</router-link>
      <router-link to="/pace">Pace</router-link>
      <router-link to="/time">Time</router-link>
      <router-link to="/unit-conversion">Unit Conversion</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#body {
  /* background-color: blue; */
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMzOCIgaGVpZ2h0PSI3NTEiIHZpZXdCb3g9IjAgMCAxMzM4IDc1MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwOTcuNDEgMjk1Ljk4NUMxMTYwLjkzIDI0Mi44MDggMTI3Mi40OCAyMDQuNjgxIDEzMzggMFY3NTFIMEMxMjAuMjEyIDY4MC40MzIgNDI2Ljk2IDUzOC4xOTIgNjkyLjI1OSA1MzMuNzc3QzEwMjMuODggNTI4LjI1OCA5NTYuOTEyIDQxMy41OTkgMTA5Ny40MSAyOTUuOTg1WiIgZmlsbD0iI0ZGRUQ5MSIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPC9zdmc+Cg==),
    url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyOCIgaGVpZ2h0PSI5OTAiIHZpZXdCb3g9IjAgMCAxODI4IDk5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzNS41NDMgMTk1LjIwNEMxOTEuMzU5IDk3LjQ4NzcgNjAuMTA0MSAyNC4zNTI5IDAgMFY5OTJIMTgyNy41QzE3NTYuNTcgOTU5LjQ2NiAxNTQ5Ljg0IDkyMi42NTMgMTQ4NCA5MTlDMTQwMS43IDkxNC40MzQgMTIyOC4wNyA4NDguMTY2IDEwMTUuMjcgODUyLjE2MUM4MDIuNDcxIDg1Ni4xNTYgNjI2LjY2MiA2MzQuMTk0IDQ5NCA2MTYuNUMzNjEuMzM4IDU5OC44MDYgMjkwLjc3NCAzMTcuMzQ5IDIzNS41NDMgMTk1LjIwNFoiIGZpbGw9IiNGRjkyMkQiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPgo=),
    url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ1MSIgaGVpZ2h0PSI5OTAiIHZpZXdCb3g9IjAgMCAxNDUxIDk5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4MS44NDkgMzQ5LjQ4MkM5Ni45ODYgMzk5LjEwMSAyNS4yNTY3IDc5Ny4xNjkgMCA5OTBMMCAwTDE0NTEgMEMxMzMyLjgzIDMyLjIwNDggMTA3OC4yMSA5Ni42MTQ0IDEwMDUuMDQgOTYuNjE0NEM5MTMuNTczIDk2LjYxNDQgNzc1LjU2MyAyMTQuMTAyIDY0Mi40MjMgMjExLjcxN0M1MDkuMjg0IDIwOS4zMzEgMjg3LjkyNyAyODcuNDU4IDE4MS44NDkgMzQ5LjQ4MloiIGZpbGw9IiNGRjY0NDIiIGZpbGwtb3BhY2l0eT0iMC40NSIvPgo8L3N2Zz4K);
  background-position: bottom right, bottom left, top left;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-color: #f6d6b9;
}
</style>

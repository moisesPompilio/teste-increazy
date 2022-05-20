<template>
  <div>
    <header>
      <nav class="container">
        <img src="@/assets/logo.svg" alt="logo" id="logo" />
        <div id="caixa-de-texto">
          <div id="texto-Inicial">Surreal São Paulo</div>
          <div id="texto-2">VTEX</div>
        </div>
        <img src="@/assets/icone-bell.svg" alt="bell" id="bell" />
        <div id="barra"></div>
        <div id="name-usuario">Olá, Joaquim</div>
        <img src="@/assets/usuario.svg" alt="usuario" id="icon-usuario" />
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
};
</script>

<style scoped>
header {
  background-color: var(--color-background-nav);
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav {
  display: flex;
  /*justify-content: space-between;*/
  justify-content: flex-start;
  width: 100%;
  height: 80px;
  align-items: center;
}
#logo {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 24px;
  top: 14px;
  margin-left: 0px;
  width: auto;
  height: auto;
}
#caixa-de-texto {
  position: absolute;
  width: 287px;
  height: 58px;
  left: 98px;
  top: 11px;
  margin-left: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 287px;
  height: 58px;
}
#texto-Inicial {
  margin-left: 5px;
  margin-top: 6px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  color: #ffffff;
}
#texto-2 {
  margin-left: 5px;
  margin-top: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  letter-spacing: 0.02em;
  color: #ffffff;
}
#bell {
  margin-left: 70vw;
}
#barra {
  margin-left: 20px;
  width: 0px;
  height: 80px;
  top: 0px;
  opacity: 0.2;
  border: 2px solid #ffffff;
}
#name-usuario {
  margin-left: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  color: #ffffff;
}

#icon-usuario {
  margin-left: 15px;
}
</style>

<template>
  <div class="container">
    <h1> Central de controle do cliente </h1>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cliente',

}
</script>

<style scoped>
.container {
  background-color: #6646db;
  color: #fff;
  padding: 10px;
}

.elementos {
  display: flex;
}

.elementos > * {
  margin: 10px;
}
</style>
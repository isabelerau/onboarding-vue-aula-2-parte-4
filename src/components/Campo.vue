<template>
  <div class="campo">
    <label> {{ label }}:</label>
    <div class="conteudo">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Campo',
  props: ['label']

}
</script>

<style>
.campo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 15px 0px;
    font-size: 1.4rem;
}

.conteudo {
    display: flex;
    align-self: stretch;
    margin: 10px 0px;
}
</style>
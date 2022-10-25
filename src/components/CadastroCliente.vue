<template>
  <div class="conteudo">

    <div class="painel" v-if="!enviado">
      <Campo label="Nome">
        <input type="text" v-model="cliente.nome"/>
      </Campo>
      <Campo label="CPF">
        <input type="text" v-model="cliente.cpf"/>
      </Campo>

      <Campo label="Estado civil">
        <select v-model="cliente.estadoCivil">
          <option v-for="estadoCivil in listaEstadoCivil" :value="estadoCivil.codigo" :key="estadoCivil.codigo">
            {{ estadoCivil.codigo }} - {{ estadoCivil.label}}
          </option>
        </select>
      </Campo>

      <Campo label="Tipo de vínculo">
        <span class="rad"><input type="radio" value="socio" v-model="cliente.vinculo"/> Sócio </span>
        <span class="rad"><input type="radio" value="avulso" v-model="cliente.vinculo"/> Avulso </span>
      </Campo>

      <button @click="enviar"> Enviar </button>
    </div>

    <div class="painel" v-else>
      <Campo label="Nome">
        {{ cliente.nome }}
      </Campo>
      <Campo label="CPF">
        {{ cliente.cpf | cpf }}
      </Campo>
      <Campo label="Estado civil">
        {{ cliente.estadoCivil}}
      </Campo>
      <Campo label="Tipo de vínculo">
        {{ cliente.vinculo }}
      </Campo>
    </div>
  </div>
</template>

<script>
import Campo from '@/components/Campo.vue';

export default {
  name: "CadastroCliente",
  components: { Campo },
  data() {
    return {
      cliente: {
        nome: '',
        cpf: '',
        idade: '',
        estadoCivil: 1,
        vinculo: 'socio'
      },
      enviado: false,
      listaEstadoCivil: [
        { codigo: 1, label: 'Solteiro(a)'},
        { codigo: 2, label: 'Casado(a)'},
        { codigo: 3, label: 'Divorciado(a)'}
      ]
    }
  },
  methods: {
    enviar() {
      this.enviado = true
    }
  }
}
</script>

<style>
body {
background-color: #ECECEC;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

.painel button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

.rad {
  margin-right: 40px;
}
</style>
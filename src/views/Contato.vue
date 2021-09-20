<template>
  <div>
    <div v-if="loading">
      <PageLoading/>
    </div>

    <transition>
      <div v-if="api">
        <h1>{{ api.titulo }}</h1>
        <p>{{ api.descricao }}</p>
        <ul>
          <li>
            <b>Email: </b>
            <span>{{ api.contato.email}}</span>
          </li>
          <li>
            <b>Telefone: </b>
            <span>{{ api.contato.telefone}}</span>
          </li>
          <li>
            <b>Endereco: </b>
            <span>{{ api.contato.endereco}}</span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';

export default {
  name: "Contato",
  mixins: [fetchData],
  created() {
    this.fetchData('/contato');
  },
}
</script>

<style>

</style>
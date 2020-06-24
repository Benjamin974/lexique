<template>
  <nav class="pb-12" flat height="10px" tile>
    <v-toolbar extended extension-height="10" dark color="#640137">
      <v-toolbar-title>
        <v-icon>mdi-book</v-icon>LEXIQUE
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn class="mr-4" to="/" text>Accueil</v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>

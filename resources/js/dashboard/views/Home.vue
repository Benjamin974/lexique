<template>
  <v-container>
    <h1>The lexique</h1>
    <v-system-bar height="10%" color="#640137" class="mb-10"></v-system-bar>
    <v-card class="mb-10">
      <v-card-title>
        <v-row>
          <v-col md-6>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Rechercher"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
          <v-col md-6>
            <v-text-field
              :value="itemsPerPage"
              label="Termes par page"
              type="number"
              min="-1"
              max="15"
              @input="itemsPerPage = parseInt($event, 10)"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
      ></v-data-table>
      <div class="text-center pt-2">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </v-card>
  </v-container>
</template>

<script src='./home.js' />
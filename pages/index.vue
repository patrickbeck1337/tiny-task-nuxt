<template>
  <v-card
    max-width="600"
    class="mx-auto"
  >
    <v-card-text>
      <v-text-field
        label="Add new tiny task..."
      ></v-text-field>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-list two-line subheader>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-item-avatar>
          <v-icon
          >assignment
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item-content>
        <v-btn text icon>
          <v-icon>delete</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        items: [{id: '123', name: 'Buy a house'}, {id: '123', name: 'Buy a book'}],
        icon: 'assignment',
        iconClass: 'blue white--text'
      };
    }
  };
</script>

<style>
</style>

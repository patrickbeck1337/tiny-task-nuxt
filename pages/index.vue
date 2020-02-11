<template>
  <v-card
    max-width="600"
    class="mx-auto"
  >
    <v-form
      @submit="submitForm"
      onSubmit="return false;"
    >
      <v-card-text>
        <v-text-field
          v-model="newTask"
          label="Add new tiny task..."
          required
        ></v-text-field>
      </v-card-text>
    </v-form>
    <v-divider class="mx-4"></v-divider>
    <v-list two-line subheader>
      <v-list-item
        v-for="task in tasks"
        :key="task.id"
        @click=""
      >
        <v-list-item-avatar>
          <v-icon
          >assignment
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="task.name"></v-list-item-title>
          <v-list-item-subtitle v-text="task.id"></v-list-item-subtitle>
        </v-list-item-content>
        <v-btn text icon>
          <v-icon>delete</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  import uuid from 'uuid';

  export default {
    data() {
      return {
        newTask: '',
        tasks: [{id: uuid(), name: 'Buy a house'}, {id: uuid(), name: 'Buy a book'}],
        icon: 'assignment',
        iconClass: 'blue white--text'
      };
    },
    methods: {
      submitForm() {
        this.tasks.push({id: uuid(), name: this.newTask});
      }
    }
  };
</script>

<style>
</style>

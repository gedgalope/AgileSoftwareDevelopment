<template>
  <v-container fluid class="pa-0 ma-0">
    <v-card>
      <v-card-text class="pb-0">
        <v-textarea v-model="agileText" solo :disabled="!edit"></v-textarea>
      </v-card-text>
      <v-card-actions class="pa-0">
        <v-container fluid class="pt-0">
          <v-row justify="center">
            <v-col cols="4">
              <v-btn block outlined :color="edit ? 'success' : 'primary'" @click="edit = !edit">
                <span v-if="edit"> <v-icon class="pr-2" small>mdi-content-save</v-icon> Save</span>
                <span v-else><v-icon class="pr-2" small>mdi-pencil</v-icon> Edit</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "data-comp",
  created() {
    if (this.values) {
      this.agileText = this.values;
    }
  },
  data() {
    return {
      agileText: null,
      edit: false,
    };
  },
  watch: {
    values(val) {
      this.agileText = val;
    },
  },
  props: {
    values: {
      type: String,
      default: () => "test",
    },
  },
};
</script>

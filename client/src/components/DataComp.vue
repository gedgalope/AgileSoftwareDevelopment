<template>
  <v-container fluid class="pa-0 ma-0">
    <v-card>
      <v-card-text class="pb-0">
        <v-textarea
          v-model="agileText"
          solo
          outlined
          :disabled="!edit"
        ></v-textarea>
      </v-card-text>
      <v-card-actions class="pa-0">
        <v-container fluid class="pt-0">
          <v-row justify="center">
            <v-col cols="4">
              <v-btn
                block
                outlined
                :color="edit ? 'success' : 'primary'"
                @click="updateStatement()"
              >
                <span v-if="edit">
                  <v-icon class="pr-2" small>mdi-content-save</v-icon>
                  Save</span
                >
                <span v-else
                  ><v-icon class="pr-2" small>mdi-pencil</v-icon> Edit</span
                >
              </v-btn>
            </v-col>
            <v-col cols="4">
              <v-dialog
                v-model="deleteDialog"
                persistent
                transition="dialog-transition"
                width="30%"
              >
                <template v-slot:activator="{ on }">
                  <v-btn block outlined color="error" v-on="on">
                    <span>
                      <v-icon class="pr-2" small>mdi-trash-can-outline</v-icon>
                      Delete</span
                    >
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="">
                    <v-row justify="center">Warning</v-row>
                  </v-card-title>
                  <v-divider class="warning"></v-divider>
                  <v-card-text class="pb-0 pt-2 text-center">
                    Are you sure? Once deleted data cannot be
                    retrieved</v-card-text
                  >
                  <v-card-actions>
                    <v-container class="py-0">
                      <v-row justify="center">
                        <v-col cols="2"
                          ><v-btn
                            color="error"
                            outlined
                            @click="deleteStatement()"
                            >Yes</v-btn
                          ></v-col
                        >
                        <v-col cols="2"
                          ><v-btn
                            color="primary"
                            outlined
                            @click="deleteDialog = false"
                            >No</v-btn
                          ></v-col
                        >
                      </v-row>
                    </v-container>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "data-comp",
  created() {
    if (this.values) {
      this.agileText = this.values.statement;
    }
  },
  data() {
    return {
      agileText: null,
      edit: false,
      deleteDialog: false,
    };
  },
  watch: {
    values(val) {
      this.agileText = val.statement;
    },
  },
  props: {
    values: {
      type: Object,
      default: () => {},
    },
  },
  computed: {},
  methods: {
    ...mapActions({
      deletePost: "deleteStatement",
      updatePost: "updateStatement",
    }),
    deleteStatement() {
      this.deletePost(this.values.id);
      this.deleteDialog = false
    },
    updateStatement() {
      if (this.edit) {
        this.updatePost({
          id: this.values.id,
          statement: { agileType: this.values.agileType, statement: this.agileText },
        });
      }
      this.edit = !this.edit;
    },
  },
};
</script>

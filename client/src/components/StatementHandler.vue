<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <v-card-title>
            <v-row justify="center">{{dataType=='values'? 'Agile Values' : 'Agile Principles'}}</v-row>
          </v-card-title>
          <v-card-text>
            <v-row>
              <template v-for="(values, index) in datasets">
                <v-col cols="6" :key="index">
                  <data-comp :values="values"></data-comp>
                </v-col>
              </template>
            </v-row>
            <v-dialog
              v-model="addNewStatementDialog"
              max-width="500px"
              transition="dialog-transition"
              @click:outside="closeDialog()"
            >
              <template v-slot:activator="{ on }">
                <v-row justify="center">
                  <v-col cols="2" align-self="center">
                    <v-btn color="success" block v-on="on" x-large outlined :disabled="disableAdd"
                      ><v-icon>mdi-plus</v-icon></v-btn
                    >
                  </v-col>
                </v-row>
              </template>
              <v-card>
                <v-card-title>
                  <v-row justify="center">Add New</v-row>
                </v-card-title>
                <v-divider></v-divider>
                <v-form ref="addnew" v-model="addNew"
                  ><v-card-text class="pb-0">
                    <v-textarea
                      solo
                      outlined
                      v-model="newStatement"
                      placeholder="Insert Text Here"
                      focused
                    ></v-textarea>
                  </v-card-text>
                  <v-card-actions>
                    <v-container class="py-0">
                      <v-row justify="center">
                        <v-col cols="4">
                          <v-btn
                            color="success"
                            outlined
                            block
                            @click="saveNewData()"
                            >Save</v-btn
                          >
                        </v-col>
                        <v-col cols="4">
                          <v-btn
                            color="error"
                            outlined
                            block
                            @click="closeDialog()"
                            >Cancel</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-dialog>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DataComp from "./DataComp.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "statement-handler",
  components: {
    "data-comp": DataComp,
  },
  props: {
    datasets: {
      type: Array,
      default: () => [],
    },
    dataType: {
      type: String,
      default: () => "values",
    },
  },
  data() {
    return {
      addNewStatementDialog: false,
      addNew: false,
      newStatement: null,
    };
  },
  computed: {
    ...mapGetters({
      getAgileValues: "getAgileValues",
    }),
    disableAdd(){
      if(this.dataType == 'values'){
        return this.datasets.length>=4
      }
      else{
        return this.datasets.length>=12
      }
    }
  },
  methods: {
    ...mapActions({
      pushNewStatement: "newStatement",
    }),
    saveNewData() {
      this.pushNewStatement({
        agileType: this.dataType,
        statement: this.newStatement,
      });
      this.$refs.addnew.reset();
      this.addNewStatementDialog = false;
    },
    closeDialog() {
      this.$refs.addnew.reset();
      this.addNewStatementDialog = false;
    },
  },
};
</script>

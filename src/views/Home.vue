<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <v-card-title>
            <v-row justify="center">Agile Values</v-row>
          </v-card-title>
          <v-card-text>
            <v-row>
              <template v-for="(values, index) in testData">
                <v-col cols="6" :key="index">
                  <data-comp :values="values"></data-comp>
                </v-col>
              </template>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <v-card-title>
            <v-row justify="center">Agile Principles</v-row>
          </v-card-title>
          <v-card-text>
            <v-row>
              <template v-for="(values, index) in testData2">
                <v-col cols="4" :key="index">
                  <data-comp :values="values"></data-comp>
                </v-col>
              </template>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DataComp from "../components/DataComp.vue";

export default {
  name: "Home",
  components: {
    "data-comp": DataComp,
  },
  data() {
    return {
      testData: ["1", "2", "3", "4"],
      testData2: ["1", "2", "3", "4",],
    };
  },
};
</script>

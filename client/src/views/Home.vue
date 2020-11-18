<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <statement-handler :datasets="getAgileValues" ></statement-handler>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <statement-handler :datasets="getAgilePrinciples" dataType="principles" ></statement-handler>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StatementHandler from "../components/StatementHandler.vue";
import { mapGetters,mapActions } from "vuex";

export default {
  name: "Home",
  created() {
    this.$store.dispatch("getApiPosts");
  },
  components: {
    "statement-handler": StatementHandler,
  },
  props:{
    dataType:{
      type:String,
      default:()=>"values"
    }
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
      getAgilePrinciples: "getAgilePrinciples",
    }),
  },
  methods:{
    ...mapActions({
      pushNewStatement:'newStatement'
    }),
    saveNewData(){
      this.pushNewStatement({
        agileType:this.dataType,
        statement:this.newStatement
      })
    },
    closeDialog(){
      this.$refs.addnew.reset()
      this.addNewStatementDialog = false
    }
  }
};
</script>

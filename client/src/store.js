import Vue from 'vue'
import Vuex from 'vuex'
import apiPosts from './api/posts'

Vue.use(Vuex)

const modules = {
  state: {
    posts: null,
  },
  getters: {
    getAgileValues: state => {
      if (!state.posts) return []
      return state.posts.filter(elem => elem.agileType == 'values')
    },
    getAgilePrinciples: state => {
      if (!state.posts) return []
      return state.posts.filter(elem => elem.agileType == 'principles')
    }
  },
  mutations: {
    POPULATE_POSTS(state, postsPayload) {
      if (postsPayload) state.posts = postsPayload.data;
    }
  },
  actions: {
    /*eslint-disable*/
    async getApiPosts({ commit }) {
      const populatedPosts = await apiPosts.getAllPosts();
      commit('POPULATE_POSTS', populatedPosts)
      console.log(populatedPosts.data)
    },
    async newStatement({ commit }, newStatement) {
      try {
        await apiPosts.postNewStatement(newStatement)
        const populatedPosts = await apiPosts.getAllPosts();
        commit('POPULATE_POSTS', populatedPosts)
      } catch (error) {
        throw error
      }
    },
    async deleteStatement({ commit }, id) {
      try {
        await apiPosts.deleteStatement(id)
        const populatedPosts = await apiPosts.getAllPosts();
        commit('POPULATE_POSTS', populatedPosts)
        console.log(populatedPosts)
      } catch (error) {
        throw error
      }
    },
    async updateStatement({ commit }, {id,statement}) {
      try {
        await apiPosts.updateStatement({id,statement})
        console.log(statement)
        const populatedPosts = await apiPosts.getAllPosts();
        commit('POPULATE_POSTS', populatedPosts)
      } catch (error) {
        throw error
      }
    }
  }
}

export default new Vuex.Store(modules)

import api from "./api"

const posts = {
  async getAllPosts(){
    const result =  await api().get('/posts')
    // if(result) return result.;
    return result
  },
  async postNewStatement(newPost){
    try{
      await api().post('/posts',newPost)
      return true;
    }catch(err){
      throw err;
    }
  },
  async deleteStatement(id){
    try{
      await api().delete(`/posts/${id}`)
      return true;
    }
    catch(err){
      throw err;
    }
  },
  async updateStatement({id,statement}){
    /*eslint-disable*/
    try{
      await api().put(`/posts/${id}`,statement)
      return true;
    }
    catch(err){
      throw err;
    }
  }
}

export default posts
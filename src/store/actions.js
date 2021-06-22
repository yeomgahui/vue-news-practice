import { 
    fetchUserInfo, 
    fetchCommentItem,
    fetchList} from '../api/index'

export default {
    // promise
        FETCH_USER({commit}, name){
            return  fetchUserInfo(name)
                .then(({data}) =>{
                    commit('SET_USER',data);
                }).catch(error =>{
                    console.log(error);
                });
        },
        //async
        async FETCH_ITEM({commit}, id){
            const response = await fetchCommentItem(id)
            commit('SET_ITEM',response.data);
            return response;
        },
        async FETCH_LIST({commit}, pageName){
            try{
                const response = await fetchList(pageName);
                commit('SET_LIST', response.data);
                return response;
            }catch(error){
                console.log(error);
            }
        }
    };
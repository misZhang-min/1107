import {showDynamic,sendWord} from '../../service/index'
const state={
    list:[]
}
const mutations={
    updatedList(state,payload) {
        state.list=payloads.reverse()
    }
}
const actions={
    async getTimeline(context,payload){
        let data=await showDynamic()
        context.commit('updateList',data.data.data)
    },
    async postTimeline(context, payload){
        let data = await sendWord({dynamicContent: payload});
        console.log('data...', data);
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions 
}
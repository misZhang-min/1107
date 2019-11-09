<template>
    <div v-if="show" class="wrap" @click="hide">
       <div>
            <p>{{title}}</p>
            <input type="text" v-model="content">
            <button @click="reply(content);content=''">确定</button>
        </div>  
    </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex';

export default {
    data(){
        return {
            content: ''
        }
    },
    computed: {
        ...mapState({
            title: state=>state.replyModal.info.title,
            show: state=>state.replyModal.show
        })
    },
    methods:{
        ...mapMutations({
            hideModal: 'replyModal/hideModal'
        }),
        ...mapActions({
            reply: 'replyModal/reply'
        }),
        hide(e){
         
            if (e.target === e.currentTarget){
                this.hideModal();
            }
        }
    }    
}
</script>
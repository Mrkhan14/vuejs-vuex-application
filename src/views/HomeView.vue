<template>
    <div>
       <h1> Home {{ counterAA }}</h1>
        <div class="w-25">
            <Button @click="incrementHandler">increment</Button>
            <Button @click="decementHandler">decement</Button>
        </div>
    </div>
</template>

<script>
import store from '../store';
import Button from '../ui-components/Button.vue';

export default {
    components: { Button },
    name: 'KhanVue3Home',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        incrementHandler(){
           this.$store.commit('increment')
        },
        decementHandler(){
            this.$store.commit('decrement')
        }
    },

    computed:{
        counterAA() {
            return this.$store.state.count
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
       <h1> Home</h1>
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
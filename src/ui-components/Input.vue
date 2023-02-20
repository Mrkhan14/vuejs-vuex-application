<template>
    <div class="form-floating mb-3">
        <input :type="type" class="form-control" id="floatingName" :placeholder="label">
        <label for="floatingName">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        label: String,
        type: String,
        placeholder: String

        
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>
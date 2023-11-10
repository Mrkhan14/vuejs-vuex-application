<template>
    <ul class="list-group">
        <li class="list-group-item list-group-item-danger mb-2 "
            v-for='errorMessage in errorMessage'
            :key="errorMessage">
            {{ errorMessage }}
        </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'ValidationError',
    props: {
        validationErrors: {
            typeof: Object,
            required: true,
        }
    },
    data() {
        return {}
    },
    components: {
    },
    computed: {
        errorMessage() {
            return Object.keys(this.validationErrors).map(name => {
                const msg = this.validationErrors[name].join(', ');
                return `${name} ${msg}`;
            })
        }
    },
    methods: {
    },

}
</script>
<style></style>

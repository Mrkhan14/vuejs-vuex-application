<template>
	<div>
		<CreateForm/>
	</div>
</template>

<script>
import{ CreateForm} from '@/components/'
import {mapState} from 'vuex'
export default {
	components: {
		CreateForm,
	},
}
</script>
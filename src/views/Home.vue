<template>
	<BaseLayout :title=" 'Home' ">
		<img alt="Vue logo" src="../assets/logo.png">
	</BaseLayout>
</template>

<script>
	import BaseLayout from '@/layouts/BaseLayout/index.vue';

	export default {
		name: 'Home',
			components: {
			BaseLayout,
		},
	};

</script>
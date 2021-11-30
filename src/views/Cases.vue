<template>
	<BaseLayout :title=" 'Cases' ">
		<Compare />
	</BaseLayout>
</template>

<script>
	import BaseLayout from '@/layouts/BaseLayout/index.vue';
	import Compare from '@/components/Compare/index.vue';

	export default {
		name: 'Cases',
			components: {
			BaseLayout,
			Compare
		},
	};

</script>
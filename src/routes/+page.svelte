<script lang= "ts">
	import MY_SKILLS from "$lib/skills.params";

    import { HOME } from '$lib/params'
    import MainTitle from '$lib/components/MainTitle/MainTitle.svelte'
	import Carousel from '$lib/components/Carousel/Carousel.svelte';
    const {name, lastName, description, skills} = HOME
</script>

<div
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left ">{name} {lastName},</MainTitle>
		<p class="text-[var(--tertiary-text)]  text-center md:text-left text-[1.2em] font-extralight">
			{description}
		</p>
    </div>
	<Carousel items={skills ?? MY_SKILLS}></Carousel>
</div>
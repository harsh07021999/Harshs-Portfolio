<script lang= "ts">
    import { HOME } from '$lib/params'
    import MainTitle from '$lib/components/MainTitle/MainTitle.svelte'
    const {name, lastName, description} = HOME
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
</div>
<script>
	import Grid from "svelte-grid-responsive";
	import Fullpage from "./Fullpage.svelte";
	import FullpageSection from "./FullpageSection.svelte";
	import NavItem from "./NavItem.svelte";
</script>

<main>
	<Fullpage>
		<FullpageSection center>
			<div class="nav">
				<Grid container>
					<Grid xs={0} sm={1} md={2} lg={3} />
					<Grid xs={12} sm={10} md={8} lg={6}>
						<Grid container>
							<Grid xs={6} sm={6} md={2}>
								<NavItem>Arte</NavItem>
							</Grid>
							<Grid xs={6} sm={6} md={2}>
								<NavItem>Psicologia</NavItem>
							</Grid>
							<Grid xs={12} sm={12} md={4}>
								<NavItem brand>KASALO</NavItem>
							</Grid>
							<Grid xs={6} sm={6} md={2}>
								<NavItem>Talleres</NavItem>
							</Grid>
							<Grid xs={6} sm={6} md={2}>
								<NavItem>Contacto</NavItem>
							</Grid>
						</Grid>
					</Grid>
					<Grid xs={0} sm={1} md={2} lg={3} />
				</Grid>
			</div>
		</FullpageSection>
	</Fullpage>
</main>

<style>
	.nav {
		width: 100%;
		background-color: rgba(0, 0, 0, 0.1);
		padding: 15px 0px;
	}
</style>

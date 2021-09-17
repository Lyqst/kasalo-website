<script>
	import Grid from "svelte-grid-responsive";
	import Fullpage from "./Fullpage.svelte";
	import FullpageSection from "./FullpageSection.svelte";
	import Nav from "./Nav.svelte";
	import NavItem from "./NavItem.svelte";
	import Content from "./Content.svelte";

	let landing = true;
	let test = 0;
	let contentBgColor = 0;
	function handleClick() {
		landing = !landing;
		test = test + 1;
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main>
	<Fullpage>
		<FullpageSection {landing}>
			<Nav {landing}>
				<Grid container>
					<Grid xs={0} sm={1} md={2} lg={3} />
					<Grid xs={12} sm={10} md={8} lg={6}>
						<Grid container>
							<Grid xs={6} sm={6} md={2}>
								<NavItem bind:contentBgColor bind:landing>
									Arte
								</NavItem>
							</Grid>
							<Grid xs={6} sm={6} md={2}>
								<NavItem bind:contentBgColor bind:landing>
									Psicologia
								</NavItem>
							</Grid>
							<Grid xs={12} sm={12} md={4}>
								<NavItem brand bind:contentBgColor bind:landing>
									KASALO
								</NavItem>
							</Grid>
							<Grid xs={6} sm={6} md={2}>
								<NavItem bind:contentBgColor bind:landing>
									Talleres
								</NavItem>
							</Grid>
							<Grid xs={6} sm={6} md={2}>
								<NavItem bind:contentBgColor bind:landing>
									Contacto
								</NavItem>
							</Grid>
						</Grid>
					</Grid>
					<Grid xs={0} sm={1} md={2} lg={3} />
				</Grid>
			</Nav>
			<Content {contentBgColor} />
		</FullpageSection>
	</Fullpage>
</main>

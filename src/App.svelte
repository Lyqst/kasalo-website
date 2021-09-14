<script>
	import "chota";
	import { Container, Row, Col, Nav } from "svelte-chota";
</script>

<main>
	<Container bg-primary>
		<Row>
			<Col size="1" sizeMD="2"/>
			<Col size="10" sizeMD="8">
				<Nav>
					<svelte:fragment slot="left">
						<a href="/">Arte</a>
						<a href="/">Psicologia</a>
					</svelte:fragment>

					<a slot="center" href="/" class="brand">KASALO</a>

					<svelte:fragment slot="right">
						<a href="/">Talleres</a>
						<a href="/">Contacto</a>
					</svelte:fragment>
				</Nav>
			</Col>
			<Col size="1" sizeMD="2"/>
		</Row>
	</Container>
</main>

<style>
    :global(:root) {
        --color-primary: #14854F;
        --color-lightGrey: #d2d6dd;
        --color-grey: #747681;
        --color-darkGrey: #3f4144;
        --color-error: #d43939;
        --color-success: #28bd14;
        --grid-maxWidth: 120rem;
        --grid-gutter: 2rem;
        --font-size: 1.6rem;
        --font-family: "Optima", sans-serif;
    }
</style>


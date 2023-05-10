export default function Album({ albumData }) {
	return (
		<>
			<div>
				<h1>Album</h1>
				<br />
				<p>albumData : {JSON.stringify(albumData)}</p>
			</div>
		</>
	)
}

export async function getStaticPaths() {
	// Return a list of possible value for id
}

export async function getStaticProps({ params }) {
	// Fetch necessary data for the blog post using params.id
	const albumData = { id: params.id }
	return {
		props: {
			albumData,
		},
	}
}

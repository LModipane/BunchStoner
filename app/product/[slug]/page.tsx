export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	return (
		<main className="w-full h-screen bg-amber-50 flex items-center justify-center">
			<h1 className="text-4xl font-bold text-green-950">Product Page for {slug}</h1>
		</main>
	);
}

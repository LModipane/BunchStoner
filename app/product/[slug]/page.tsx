import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaChevronLeft, FaShoppingCart, FaStar, FaRegHeart, FaShareAlt } from 'react-icons/fa';
import { client as SanityClient } from '@/sanity/lib/client';
import { Product } from '@/types';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	const productQuery = `*[_type == "inventory" && slug.current == $slug][0]{
		name,
		price,
		category,
		discount,
		description,
		"slug": slug.current,
		"coverImageUrl": mainImage.asset -> url,
	}`;

	const product = await SanityClient.fetch<Product | null>(productQuery, { slug });

	if (!product) {
		notFound();
	}

	const discountedPrice =
		product.discount > 0
			? (product.price - (product.price * product.discount) / 100).toFixed(2)
			: product.price.toFixed(2);

	const originalPrice = product.price.toFixed(2);

	return (
		<main className="min-h-screen bg-amber-50 flex flex-col items-center">
			{/* Simple Nav / Header */}
			<nav className="w-full h-20 bg-white text-black flex items-center p-3 justify-between shadow-sm sticky top-0 z-50">
				<Link href="/" className="text-lg font-bold flex items-center gap-x-2 ml-4">
					<FaChevronLeft className="w-5 h-5 text-green-950" />
					<span className="text-green-950">Back to Shop</span>
				</Link>
				<Link
					href="/"
					className="text-xl font-extrabold text-green-950 absolute left-1/2 -translate-x-1/2">
					Bunch Stoners
				</Link>
				<div className="mr-4">
					<FaShoppingCart className="w-6 h-6 text-green-950 cursor-pointer" />
				</div>
			</nav>

			<div className="max-w-7xl w-full px-4 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
				{/* Image Section */}
				<div className="relative group">
					<div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-white shadow-xl">
						<Image
							src={product.coverImageUrl}
							alt={product.name}
							fill
							priority
							className="object-cover object-center transition duration-500 group-hover:scale-105"
						/>
						{product.discount > 0 && (
							<div className="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
								-{product.discount}% OFF
							</div>
						)}
					</div>
					<div className="absolute top-6 right-6 flex flex-col gap-4">
						<button className="bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition text-red-500">
							<FaRegHeart className="w-6 h-6" />
						</button>
						<button className="bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition text-gray-700">
							<FaShareAlt className="w-6 h-6" />
						</button>
					</div>
				</div>

				{/* Content Section */}
				<div className="flex flex-col justify-center gap-y-8">
					<div className="space-y-4">
						<span className="inline-block px-4 py-1 rounded-full bg-amber-200 text-green-950 text-sm font-semibold uppercase tracking-wider">
							{product.category}
						</span>
						<h1 className="text-4xl md:text-5xl font-black text-green-950 leading-tight">
							{product.name}
						</h1>
						<div className="flex items-center gap-x-2">
							<div className="flex text-amber-400">
								{[...Array(5)].map((_, i) => (
									<FaStar key={i} className="w-5 h-5 fill-current" />
								))}
							</div>
							<span className="text-gray-500 text-sm">(4.8 / 5 based on 124 reviews)</span>
						</div>
					</div>

					<div className="space-y-2">
						<div className="flex items-baseline gap-x-4">
							<span className="text-4xl font-bold text-green-900">R {discountedPrice}</span>
							{product.discount > 0 && (
								<span className="text-xl text-gray-400 line-through font-medium">
									R {originalPrice}
								</span>
							)}
						</div>
						<p className="text-green-700 text-sm font-medium italic">* Inclusive of all taxes</p>
					</div>

					<div className="space-y-2">
						<h3 className="text-xl font-bold text-green-950">Product Description</h3>
						<p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
							{product.description}
						</p>
					</div>

					<div className="flex flex-col gap-4 mt-4">
						<div className="flex items-center gap-4">
							<div className="flex items-center border-2 border-green-950 rounded-full px-4 py-2 bg-white">
								<button className="px-2 text-xl font-bold text-green-950">-</button>
								<span className="px-6 text-lg font-bold text-green-950">1</span>
								<button className="px-2 text-xl font-bold text-green-950">+</button>
							</div>
							<p className="text-sm text-gray-500 font-medium">Only 12 items left!</p>
						</div>

						<div className="flex gap-4">
							<button className="flex-1 bg-green-950 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-green-900 hover:-translate-y-1 transition active:scale-95 flex items-center justify-center gap-x-3">
								<FaShoppingCart className="w-6 h-6" />
								Add to Cart
							</button>
							<button className="flex-1 bg-amber-300 text-green-950 px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-amber-400 hover:-translate-y-1 transition active:scale-95">
								Buy Now
							</button>
						</div>
					</div>

					{/* Additional Info Tags */}
					<div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-amber-200/50">
						<div className="flex items-center gap-x-3 text-sm text-gray-600">
							<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
								🚚
							</div>
							<span>Fast Delivery</span>
						</div>
						<div className="flex items-center gap-x-3 text-sm text-gray-600">
							<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
								✨
							</div>
							<span>Premium Quality</span>
						</div>
						<div className="flex items-center gap-x-3 text-sm text-gray-600">
							<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
								🛡️
							</div>
							<span>Secure Payment</span>
						</div>
						<div className="flex items-center gap-x-3 text-sm text-gray-600">
							<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
								♻️
							</div>
							<span>Eco-friendly</span>
						</div>
					</div>
				</div>
			</div>

			{/* Related Products Placeholder */}
			<section className="w-full max-w-7xl px-4 py-16">
				<h2 className="text-3xl font-bold text-green-950 mb-8">You might also like</h2>
				<div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
					{/* This would ideally be populated with other products from the same category */}
					<p className="text-gray-500 italic text-center w-full">
						Coming soon: Personalized recommendations based on your taste.
					</p>
				</div>
			</section>

			<footer className="w-full bg-green-950 text-white py-12 px-4 flex flex-col items-center mt-auto">
				<h3 className="text-2xl font-bold mb-4">Bunch Stoners</h3>
				<p className="text-gray-400 mb-6">A Cannabis Dispensary, Delivery, and Lifestyle Brand.</p>
				<p className="text-sm">Bunch Stoners &copy; 2024. All rights reserved.</p>
			</footer>
		</main>
	);
}

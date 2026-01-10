import Link from 'next/link';
import Image from 'next/image';
import { IoLogoWhatsapp } from 'react-icons/io';
import { GiChestnutLeaf } from 'react-icons/gi';
import { PRODUCT_CATEGORIES } from '@/constants';
import { GiEgyptianProfile } from 'react-icons/gi';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { client as SanityClient } from '@/sanity/lib/client';
import { FaHeart, FaShare, FaRegHeart, FaFacebookF } from 'react-icons/fa';

type HeroType = {
	heroHeading: string;
	logoImageUrl: string;
	noticeBanner: string;
	contactNumber: string;
	heroSubheading: string;
	heroProductTitle: string;
	heroProductImageUrl: string;
	heroProductDescription: string;
};

type Product = {
	slug: string;
	name: string;
	price: number;
	discount: number;
	description: string;
	coverImageUrl: string;
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
	const heroProductQuery = `*[_type == "HeroProducts"][0]{
		heroHeading,
		heroSubheading,
		"heroProductImageUrl": heroProductImage.asset->url,
		heroProductTitle,
		heroProductDescription,
		noticeBanner,
		contactNumber,
		"logoImageUrl": logoImage.asset->url
		}`;

	const {
		contactNumber,
		noticeBanner,
		heroHeading,
		heroSubheading,
		heroProductImageUrl,
		heroProductTitle,
		heroProductDescription,
		logoImageUrl,
	} = await SanityClient.fetch<HeroType>(heroProductQuery);

	const inventoryQuery = `*[_type == "inventory"]{
		name,
		price,
		discount,
		description,
		"slug": slug.current,
		"coverImageUrl": mainImage.asset -> url,
	}`;

	const inventory = await SanityClient.fetch<Product[]>(inventoryQuery);

	return (
		<main className="w-full flex flex-col items-center bg-amber-50">
			<div className="w-full bg-green-950 min-h-12 flex items-center justify-between text-white text-sm capitalize px-4">
				<div className="">
					<p className="mr-20 text-md ">Call us: {contactNumber}</p>
				</div>
				<Link href="/" className="flex items-center">
					<p>{noticeBanner}</p>
					<span className="text-amber-300 underline mx-2">Sign up now</span>
				</Link>
				<div className="ml-20 flex gap-x-3">
					<FaFacebookF className="w-5 h-5 rounded-full bg-amber-300 text-green-950 p-0.5 cursor-pointer" />
					<IoLogoWhatsapp className="w-5 h-5 rounded-full bg-amber-300 text-green-950 p-0.5 cursor-pointer" />
				</div>
			</div>
			<nav className="w-full h-20 bg-white text-black flex items-center p-3 justify-between">
				<Link href="/" className="text-lg font-bold flex items-center gap-x-2">
					<div className="relative w-7 h-7">
						<Image src={logoImageUrl} alt="Bunch Stoners Logo" fill className="object-fill" />
					</div>
					<h1>Bunch Stoners</h1>
				</Link>
				<div className="flex items-center gap-x-6 text-md text-gray-700 text-lg font-extralight">
					<Link href="#">Home</Link>
					<Link href="#">Shop</Link>
					<Link href="#">Category</Link>
					<Link href="#">About Us</Link>
					<Link href="#">Contact Us</Link>
					<Link href="#">Events</Link>
				</div>
				<div className="flex items-center gap-x-4 px-3">
					<FaRegHeart className="w-6 h-6 text-green-950 cursor-pointer" />
					<MdOutlineLocalGroceryStore className="w-6 h-6 text-green-950 cursor-pointer" />
					<GiEgyptianProfile className="w-6 h-6 text-green-950 cursor-pointer" />
				</div>
			</nav>
			<header className="w-full h-[80vh] flex items-center justify-between px-13">
				<div className="flex flex-col gap-y-6 w-1/2 h-full p-4">
					<div className="flex items-center gap-x-3 text-black text-xl font-medium mt-16 bg-white p-3 rounded-2xl shadow-lg w-fit">
						<GiChestnutLeaf className="w-8 h-8 text-green-950 mb-2 bg-amber-300 p-1 rounded-full" />
						<h2>Smart Style Meets Everyday Life</h2>
					</div>
					<h1 className="text-black text-4xl font-extrabold">{heroHeading}</h1>
					<h2 className="text-gray-700 text-xl font-medium">{heroSubheading}</h2>
					<div className="">
						<button className="bg-green-950 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-900 transition cursor-pointer">
							Checkout
						</button>
						<button className="text-green-950 px-6 py-3 ml-4 underline font-medium hover:text-green-800 transition cursor-pointer">
							Explore
						</button>
					</div>
				</div>
				<div className="h-full w-1/2">
					<div className="mt-16 w-full bg-white h-96 p-3 flex flex-col items-center justify-center shadow-lg rounded-2xl cursor-pointer hover:scale-105 transition">
						<div className="relative w-[80%] h-[80%] m-2 p-1  rounded-xl">
							<div className="absolute top-2 -right-4 flex flex-col gap-y-3 items-center z-20">
								<FaHeart className="w-7 h-7 text-red-500 drop-shadow-lg cursor-pointer" />
								<FaShare className="w-7 h-7 text-gray-700 drop-shadow-lg ml-2 cursor-pointer" />
							</div>
							<Image
								src={heroProductImageUrl}
								alt="Hero Image"
								fill
								className="object-fill object-center rounded-2xl z-10"
							/>
						</div>
						<div className="w-full text-black pl-16 mt-3">
							<h3 className="text-lg font-bold">{heroProductTitle}</h3>
							<p className="text-gray-500 text-sm font-light line-clamp-2 w-[90%]">
								{heroProductDescription}
							</p>
						</div>
					</div>
				</div>
			</header>
			<section className="min-h-screen w-full bg-white text-black flex flex-col items-center">
				<div className="flex flex-col items-center mt-5 px-4 text-center">
					<h2 className="text-3xl font-extrabold mt-20 text-green-950">Product Collections</h2>
					<p className="text-gray-500 text-lg mt-4 mb-5">
						Explore our handpicked selection of top-quality products.
					</p>
				</div>
				<div className="flex justify-center items-center gap-8 mt-5">
					{PRODUCT_CATEGORIES.map(category => (
						<div
							key={category}
							className="border-2 border-green-950 rounded-2xl p-3 text-lg text-light cursor-pointer capitalize hover:bg-green-950 hover:text-white transition ">
							{category}
						</div>
					))}
				</div>
				<div className="flex flex-wrap gap-8 justify-center items-center mt-10 mb-20">
					{inventory.map(product => (
						<ProductCard key={product.slug} product={product} />
					))}
				</div>
			</section>
			<footer className="h-screen w-full bg-green-950 text-white flex items-end justify-center">
				<p>Bunch Stoners &copy; 2024. All rights reserved.</p>
			</footer>
		</main>
	);
}

const ProductCard = ({
	product: { coverImageUrl, name, description, price, discount },
}: {
	product: Product;
}) => {
	return (
		<div className=" h-fit w-75 flex flex-col justify-center bg-orange-100 px-3 py-2 m-1 rounded-md">
			<div className="">
				<div className="relative w-full h-62 z-10 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition">
					<Image
						fill
						src={coverImageUrl}
						alt={name + ' Image-Card'}
						className="object-center object-cover"
					/>
					{discount > 0 && (
						<div className="absolute top-3 left-3 z-20 bg-red-500 text-white px-2 py-1 rounded-br-lg">
							{discount}%
						</div>
					)}
					<div className="absolute top-3 right-3 z-20">
						<FaHeart className="w-7 h-7 text-red-500 drop-shadow-lg cursor-pointer" />
					</div>
				</div>
			</div>
			<div className="flex flex-col mt-3">
				<h4>{name}</h4>
				<p className="text-gray-500 text-sm font-light line-clamp-2 w-full">{description}</p>
				<div className="flex justify-between items-center mt-2">
					<div className="flex items-center justify-between gap-x-2 ">
						<span className="text-green-900 text-2xl">R {price}</span>
						{discount > 0 && (
							<span className="text-gray-500 line-through">
								R {(price / (1 - discount / 100)).toFixed(2)}
							</span>
						)}
					</div>
					<button className="bg-green-900 text-white px-4 py-1 rounded-full text-sm hover:bg-green-900 transition cursor-pointer">
						Checkout
					</button>
				</div>
			</div>
		</div>
	);
};

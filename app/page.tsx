import { client as SanityClient } from '@/sanity/lib/client';
import Link from 'next/link';
import {
	FaBold,
	FaFacebookF,
	FaTiktok,
	FaTwitter,
	FaRegHeart,
	FaHeart,
	FaShare,
} from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { GiEgyptianProfile } from 'react-icons/gi';
import { GiChestnutLeaf } from 'react-icons/gi';
import Image from 'next/image';

type HeroType = {
	heroHeading: string;
	heroSubheading: string;
	heroProductImageUrl: string;
	noticeBanner: string;
	contactNumber: string;
	heroProductTitle: string;
	heroProductDescription: string;
};

export default async function Home() {
	const query = `*[_type == "homePage"][0]{
		heroHeading,
		heroSubheading,
		"heroProductImageUrl": heroProductImage.asset->url,
		heroProductTitle,
		heroProductDescription,
		noticeBanner,
		contactNumber,
		}`;

	const {
		contactNumber,
		noticeBanner,
		heroHeading,
		heroSubheading,
		heroProductImageUrl,
		heroProductTitle,
		heroProductDescription,
	} = await SanityClient.fetch<HeroType>(query);

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
					<FaTiktok className="w-5 h-5 rounded-full bg-amber-300 text-green-950 p-0.5 cursor-pointer" />
					<FaTwitter className="w-5 h-5 rounded-full bg-amber-300 text-green-950 p-0.5 cursor-pointer" />
				</div>
			</div>
			<nav className="w-full h-20 bg-white text-black flex items-center p-3 justify-between">
				<h1 className="text-lg font-bold flex items-center gap-x-2">
					<FaBold className="text-amber-300 bg-green-950 p-1 rounded-full h-7 w-7" />
					Bunch Stoners
				</h1>
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
						<button className="bg-green-950 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-900 transition">
							Shop Now
						</button>
						<button className="bg-green-950 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-900 transition ml-4">
							Learn More
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
			<section className="h-screen w-full bg-white"> category</section>
			<footer className="h-screen w-full bg-green-950 text-white flex items-end justify-center">
				<p>Bunch Stoners &copy; 2024. All rights reserved.</p>
			</footer>
		</main>
	);
}

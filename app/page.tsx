import { client as SanityClient } from '@/sanity/lib/client';
import Link from 'next/link';
import { FaBold, FaFacebookF, FaTiktok, FaTwitter, FaRegHeart } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { GiEgyptianProfile } from 'react-icons/gi';

type HeroType = {
	heroHeading: string;
	heroSubheading: string;
	heroImageUrl: string;
	noticeBanner: string;
	contactNumber: string;
};

export default async function Home() {
	const query = `*[_type == "homePage"][0]{
		heroHeading,
		heroSubheading,
		"heroImageUrl": heroImage.asset->url,
		noticeBanner,
		contactNumber,
		}`;

	const { contactNumber, noticeBanner } = await SanityClient.fetch<HeroType>(query);
	return (
		<main className="w-full h-full flex flex-col items-center">
			<div className="w-full bg-green-950 h-12 flex items-center justify-between text-white text-sm capitalize px-4">
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
		</main>
	);
}

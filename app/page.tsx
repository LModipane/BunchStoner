import { client as SanityClient } from '@/sanity/lib/client';
import { FaFacebookF, FaTiktok, FaTwitter } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

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
			<div className="w-full bg-green-950 h-10 flex items-center justify-center text-white text-sm capitalize">
				<p className="mr-20 text-md ">Call us: {contactNumber}</p>
				<p>{noticeBanner}</p>
				<span className="text-amber-300 underline mx-2">Sign up now</span>
				<div className="ml-20 flex gap-x-2">
					<FaFacebookF className="w-5 h-5 rounded-full bg-amber-300 text-green-950 p-0.5 cursor-pointer" />
					<IoLogoWhatsapp className="w-5 h-5 rounded-full bg-amber-300 text-green-950 p-0.5 cursor-pointer" />
					<FaTiktok className="w-5 h-5 rounded-full bg-amber-300 text-green-950 p-0.5 cursor-pointer" />
					<FaTwitter className="w-5 h-5 rounded-full bg-amber-300 text-green-950 p-0.5 cursor-pointer" />
				</div>
			</div>
		</main>
	);
}

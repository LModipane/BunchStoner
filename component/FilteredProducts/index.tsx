"use client";

import Image from 'next/image';
import { Product } from '@/types';
import { FaHeart } from 'react-icons/fa';
import { useProductCategoryContext } from '@/hooks';

const FilteredProducts = ({ products }: { products: Product[] }) => {
	const { selectedCategory } = useProductCategoryContext();
	const filteredProducts = selectedCategory
		? products.filter(product => product.category === selectedCategory)
		: products;
	return (
		<div className="flex flex-wrap gap-8 justify-center items-center mt-10 mb-20">
			{filteredProducts.map(product => (
				<ProductCard key={product.slug} product={product} />
			))}
		</div>
	);
};

export default FilteredProducts;

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

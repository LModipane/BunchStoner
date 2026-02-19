'use client';

import { useProductCategoryContext } from "@/hooks";

const FilterCategoryButton = ({ category }: { category: string }) => {
    const { selectedCategory, setSelectedCategory } = useProductCategoryContext();
	return (
		<div
			key={category}
			onClick={() => setSelectedCategory(category)}
			className={`border-2 border-green-950 rounded-2xl p-3 text-lg text-light cursor-pointer capitalize hover:bg-green-950 hover:text-white transition ${
				selectedCategory === category ? 'bg-green-950 text-white' : ''
			}`}>
			{category}
		</div>
	);
};

export default FilterCategoryButton;

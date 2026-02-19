'use client';
import React, { createContext, useState } from 'react';

type ProductCategoryContextType = {
	selectedCategory: string | null;
	setSelectedCategory: (category: string | null) => void;
};

export const ProductCategoryContext = createContext<ProductCategoryContextType | undefined>(undefined);

const ProductCategoryContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	return (
		<ProductCategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
			{children}
		</ProductCategoryContext.Provider>
	);
};

export default ProductCategoryContextProvider;

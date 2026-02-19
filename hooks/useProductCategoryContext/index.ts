"use client";
import { useContext } from 'react';
import { ProductCategoryContext } from '@/component/ProductCategoryContextProvider';

const useProductCategoryContext = () => { 
    const context = useContext(ProductCategoryContext);
    if (!context) throw new Error('useProductCategoryContext must be used within a ProductCategoryContextProvider');
    
    return context;
}

export default useProductCategoryContext;
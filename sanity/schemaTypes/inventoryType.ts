import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'inventory',
	title: 'Inventory',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Product Name',
			type: 'string',
			description: 'This is the name of Product in Inventory',
		}),
		defineField({
			name: 'slug',
			title: 'Product Slug',
			type: 'slug',
			description:
				'This is the unique identifier used to identify the current product in inventory, You can generate the Slug (recommened) or type your own',
			options: {
				source: 'name',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'category',
			title: 'Category',
			type: 'categoryEnum',
		}),
		defineField({
			name: 'mainImage',
			title: 'Cover Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'description',
			title: 'Product Description',
			type: 'text',
			description: 'This is the description of the product in inventory',
		}),
		defineField({
			name: 'price',
			title: 'Product Price',
			type: 'number',
			description: 'This is the price of the product in inventory, (in R10.00 to R10,000.00)',
			validation: Rule =>
				Rule.min(10).max(10000).precision(2).error('Price must be between 10 and 10,000'),
		}),
		defineField({
			name: 'discount',
			title: 'Product Discount',
			type: 'number',
			description: 'This is the discount percentage for the product (0% to 100%)',
			validation: Rule =>
				Rule.min(0).max(100).precision(2).error('Discount must be between 0% and 100%'),
		}),
	],
});

export const categoryEnumType = defineType({
	name: 'categoryEnum',
	title: 'Category Enum',
	type: 'string',
	options: {
		list: [
			{ title: 'Cannabis', value: 'cannabis' },
			{ title: 'Accessories', value: 'accessories' },
			{ title: 'Edibles', value: 'edibles' },
		],
	},
});

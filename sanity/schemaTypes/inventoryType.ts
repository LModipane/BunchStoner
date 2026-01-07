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
			name: 'mainImage',
			title: 'Cover Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
	],
});

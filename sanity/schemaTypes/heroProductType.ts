import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'HeroProducts',
	title: 'Hero Products',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'logoImage',
			title: 'Logo Image',
			type: 'image',
		}),
		defineField({
			name: 'heroHeading',
			title: 'Hero Heading',
			type: 'string',
			description:
				'This is the main idea that you want the customer have when visiting the site, this gets them to click check out',
		}),
		defineField({
			name: 'heroSubheading',
			title: 'Hero Subheading',
			type: 'string',
			description:
				'This is the sentence that assist the Hero Heading so that they better understand the Idea to click checkout',
		}),
		defineField({
			name: 'heroProductImage',
			title: 'Hero Product Image',
			type: 'image',
			description: 'This refers to the image that visitors will see your of your hero/Main project',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'heroProductTitle',
			title: 'Hero Product Title',
			type: 'string',
			description: 'This refers to the name of Hero Product',
		}),
		defineField({
			name: 'heroProductDescription',
			title: 'Hero Product Description',
			type: 'text',
			description: 'This refers to the descriptions of hero product',
		}),
		defineField({
			name: 'noticeBanner',
			title: 'Notice Banner',
			type: 'string',
		}),
		defineField({
			name: 'contactNumber',
			title: 'Contact Number',
			type: 'string',
		}),
	],
});

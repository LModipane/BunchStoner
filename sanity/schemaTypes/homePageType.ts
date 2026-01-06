import { defineField, defineType } from 'sanity';

export const homePageType = defineType({
	name: 'homePage',
	title: 'Home Page',
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
		}),
		defineField({
			name: 'heroSubheading',
			title: 'Hero Subheading',
			type: 'string',
		}),
		defineField({
			name: 'heroProductImage',
			title: 'Hero Product Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'heroProductTitle',
			title: 'Hero Product Title',
			type: 'string',
		}),
		defineField({
			name: 'heroProductDescription',
			title: 'Hero Product Description',
			type: 'text',
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

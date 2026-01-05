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
			name: 'heroImage',
			title: 'Hero Image',
			type: 'image',
			options: {
				hotspot: true,
			},
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

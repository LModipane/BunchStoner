import { type SchemaTypeDefinition } from 'sanity';
import { homePageType } from './homePageType';
import inventoryType from './inventoryType';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [homePageType, inventoryType],
};

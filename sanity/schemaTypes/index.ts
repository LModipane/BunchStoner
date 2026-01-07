import { type SchemaTypeDefinition } from 'sanity';
import heroProductType from './heroProductType';
import inventoryType from './inventoryType';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [heroProductType, inventoryType],
};

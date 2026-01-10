import heroProductType from './heroProductType';
import { type SchemaTypeDefinition } from 'sanity';
import inventoryType, { categoryEnumType} from './inventoryType';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [heroProductType, inventoryType, categoryEnumType],
};
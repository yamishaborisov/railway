import { InputList, type Option } from '@/shared/ui';
import { CITY_ITEMS } from '../model/mock';

export type City = Option;

type CityInputProps = Omit<React.ComponentProps<typeof InputList>, 'items'> & {
	items?: City[];
};

export const CityInput = ({ items = CITY_ITEMS, ...props }: CityInputProps) => {
	return <InputList items={items} {...props} />;
};

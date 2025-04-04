import type { EntryGenerator } from './$types';

import { ecopoints } from '$lib/ecopoints';

export const entries: EntryGenerator = () => {
    return ecopoints.map((item)=>
		{return { ecopoint: item.slug }});
};

export const prerender = true;
export type SummaryItem = { name: string; sub: string; asset: string };

type AnimalClassificaton = 'Mamífero' | 'Réptil' | 'Ave';

type AnimalFeeding =
	| 'Carnívoro'
	| 'Herbívoro'
	| 'Onívoro'
	| 'Insetívoro'
	| 'Frugívoro';

export type Animal = {
	name: string;
	scientificName: string;
	attribution: { author: string; url: string };
	caution?: string[];
	description: string;
	classification: AnimalClassificaton;
	conservationStatus: string;
	feeding: AnimalFeeding;
	diets: AnimalFeeding[];
	sound?: { domain: string; url: string };
	otherNames: string[];
};

export type PossibleIcons =
	| 'home'
	| 'list'
	| 'map'
	| 'information-circle'
	| 'settings';

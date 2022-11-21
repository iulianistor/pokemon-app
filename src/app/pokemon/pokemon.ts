export interface PokemonDataType {
  abilities: Ability[];
  base_experience: number;
  forms: NameUrl[];
  game_indices: Index[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Mfe[];
  name: string;
  order: number;
  past_types: any[];
  species: NameUrl;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface PokemonType {
  height: number;
  name: string;
  weight: number;
  src: string;
}

//used
interface NameUrl {
  name: string;
  url: string;
}

//used
export interface Ability {
  ability: NameUrl;
  is_hidden: boolean;
  slot: number;
}

//used
export interface Index {
  game_index: number;
  version: NameUrl;
}

//used
export interface Mfe {
  move: NameUrl;
  version_group_details: VersionGroupDetail[];
}

//used
export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: NameUrl;
  version_group: NameUrl;
}

interface FrontAndBack {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface Sprites extends FrontAndBack {
  other: Other;
  versions: Versions;
}

//used
export interface Other {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
}

//used
export interface DreamWorld {
  front_default: string;
  front_female: any;
}

//used
export interface Home extends DreamWorld {
  front_shiny: string;
  front_shiny_female: any;
}

//used
export interface OfficialArtwork {
  front_default: string;
}

//used
export interface Versions {
  'generation-i': GenerationI; //done
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': GenerationVi;
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

//used
export interface GenerationI {
  'red-blue': Color;
  yellow: Color;
}

export interface ColorBasics {
  back_default: string;
  front_default: string;
  front_transparent: string;
}

//used
export interface Color extends ColorBasics {
  back_gray: string;
  front_gray: string;
  back_transparent: string;
}

//used
export interface GenerationIi {
  crystal: Crystal;
  gold: SilverGold;
  silver: SilverGold;
}

export interface Crystal extends ColorBasics {
  back_shiny: string;
  back_shiny_transparent: string;
  front_shiny: string;
  front_shiny_transparent: string;
  back_transparent: string;
}

//used
export interface SilverGold extends ColorBasics {
  back_shiny: string;
  front_shiny: string;
}

export interface GenerationIii {
  emerald: Emerald;
  'firered-leafgreen': FireredLeafgreenRubySafire;
  'ruby-sapphire': FireredLeafgreenRubySafire;
}

export interface Emerald {
  front_default: string;
  front_shiny: string;
}

export interface FireredLeafgreenRubySafire extends Emerald {
  back_default: string;
  back_shiny: string;
}
export interface GenerationIv {
  'diamond-pearl': FrontAndBack;
  'heartgold-soulsilver': FrontAndBack;
  platinum: FrontAndBack;
}

export interface GenerationV {
  'black-white': BlackWhite;
}

export interface BlackWhite extends FrontAndBack {
  animated: FrontAndBack;
}

export interface GenerationVi {
  'omegaruby-alphasapphire': OmegarubyAlphasapphire;
  'x-y': XY;
}

export interface OmegarubyAlphasapphire {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface XY {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface GenerationVii {
  icons: Icons;
  'ultra-sun-ultra-moon': UltraSunUltraMoon;
}

export interface Icons {
  front_default: string;
  front_female: any;
}

export interface UltraSunUltraMoon {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface GenerationViii {
  icons: Icons2;
}

export interface Icons2 {
  front_default: string;
  front_female: any;
}

//used
export interface Stat {
  base_stat: number;
  effort: number;
  stat: NameUrl;
}

//used
export interface Type {
  slot: number;
  type: NameUrl;
}

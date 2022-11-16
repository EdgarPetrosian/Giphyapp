// Some Typescript types declaration

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

export type LTypes = {
  text: string | number;
  focused: boolean;
};

export interface TGifDataType {
  width: string | number;
  height: string | number;
  url: string | any;
}
export interface TNoResult {
  isLoading: boolean;
}
export interface IGifImage {
  original: TGifDataType;
}
export interface IGifItemData {
  item: {images: IGifImage; id: string};
}

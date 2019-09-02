export interface CallSignature {
  id: number;
  name: string;
  kind: 4096;
  kindString: 'Call signature';
  flags: {};
  comment: {
    shortText: string;
  };
  type: {
    type: string;
    name: string;
  };
}

export interface Method {
  comment: {
    shortText: string;
  };
  flags: {
    isStatic: boolean;
    isExported: boolean;
  };
  id: number;
  kind: number;
  kindString: 'Method';
  name: string;
  signatures: CallSignature[];
}

export interface Property {
  comment: {
    shortText: string;
  };
  decorators: any[];
  defaultValue: string;
  flags: {
    isExported: boolean;
  };
  id: number;
  kind: number;
  kindString: 'Property';
  name: string;
}

export interface Class {
  comment: {
    shortText: string;
    tags: { tag: string; text: string }[];
  };
  id: number;
  kind: 128;
  kindString: string;
  name: string;
  children: Method | Property[];
}

export declare function writeRequestTypes(action: "create" | "update" | "patch" | "delete" | "get", name: string, isPlural?: boolean): Promise<void>;
export declare function writeExport(name: string): Promise<void>;
export declare function writeGetQuery(name: string, url: string, providesItem: boolean): Promise<void>;
export declare function writeCollectionQuery(name: string, url: string, providesCollection: boolean): Promise<void>;
export declare function writeCreateQuery(name: string, url: string, invalidatesCollection: boolean): Promise<void>;
export declare function writeDeleteQuery(name: string, url: string, invalidatesCollection: boolean): Promise<void>;
export declare function writeUpdateQuery(name: string, url: string, invalidatesCollection: boolean, invalidatesItem: boolean): Promise<void>;
export declare function writePatchQuery(name: string, url: string, invalidatesCollection: boolean, invalidatesItem: boolean): Promise<void>;

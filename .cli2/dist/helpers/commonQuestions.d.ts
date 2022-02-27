export default function (isPlural: boolean, hasId: boolean): Promise<{
    entity: any;
    url: string;
    urlWithoutId: string;
    gitAdd: boolean;
}>;

import { DB_BehaviorTemplate } from "./cdclient";

export interface Behavior {
    template: DB_BehaviorTemplate,
    parameters: { [key: string]: number },
}

export interface Rev_Behavior {
    uses: number[],
    used_by: number[],
    skill: number[],
    _embedded: { [key: string]: Behavior }
}

export interface ComponentTypeSingle {
    lots: number[]
}

export type ObjectsRefDict = Record<number, {name: string}>;
export interface Rev_ComponentType {
    components: Record<number, ComponentTypeSingle>;
    _embedded: { objects: ObjectsRefDict };
}

export interface Rev_ComponentTypes {
    components: number[];
}
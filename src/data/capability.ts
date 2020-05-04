export interface Capability {
    _id: object;
    name: string;
    capability: string,
    tracks: [{ _id: object, name: string }]
}
export interface Station{
    id: number
    label:string
}

export interface SearchStation{
    startStation: Station | null
    endStation:Station | null
}
export interface Bus{
    id: number
    name: string
    stations:Station[]
}
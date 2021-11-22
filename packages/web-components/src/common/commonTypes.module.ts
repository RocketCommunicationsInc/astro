export type Status =
    | 'off'
    | 'standby'
    | 'normal'
    | 'caution'
    | 'serious'
    | 'critical'

export type Classification =
    | 'cui'
    | 'controlled'
    | 'confidential'
    | 'secret'
    | 'top-secret'
    | 'top-secret-sci'
    | 'unclassified'

export type StatusTypes = {
    [id: string]: boolean
}

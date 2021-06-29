import { Status } from '../../common/commonTypes.module'

export interface LogRow {
    timestamp: Date
    status: Status
    message: string
}

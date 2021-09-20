import { park } from './parkType'

export type trips = {
    createdAt: string
    id: number
    parks: park[] | []
    tripEndDate: string
    tripImage: string
    tripName: string
    tripNotes: string
    tripStartDate: string
    updatedAt: string
    userId: number
}

export default trips;
export type natlPark = {
    activities: activity[] | []
    addresses: address[] | []
    contacts: {
        emailAddresses: email[] | []
        phoneNumbers: phone[] | []
        description: string
        designation: string
    }
    description: string
    designation: string
    directionsInfo: string
    directionsUrl: string
    entranceFees: eFee[] | []
    entrancePasses: pass[] | []
    fees: fee[] | []
    fullName: string
    id: string
    images: image[] | []
    latLong: string
    latitude: string
    longitude: string
    name: string
    operatingHours: oHours[] | []
    parkCode: string
    states: string
    topics: topic[] | []
    url: string
    weatherInfo: string
}
export type activity = {
    id: string
    name: string
}
export type address = {
    city: string
    line1: string
    line2: string
    line3: string
    postalCode: string
    stateCode: string
    type: string
}
export type email = {
    description: string
    emailAddress: string
}
export type phone = {
    description: string
    extension: string
    phoneNumber: string
    type: string
}
export type eFee = {
    cost: string
    description: string
    title: string
}
export type pass = {
    cost: string
    description: string
    title: string
}
export type fee = {}
export type image = {
    altText: string
    caption: string
    credit: string
    title: string
    url: string
}
export type oHours = {
    description: string
    exceptions: except[] | []
    name: string
    standardHours: {
        friday: string
        monday: string
        saturday: string
        sunday: string
        thursday: string
        tuesday: string
        wednesday: string
    }
}
export type except = {
    endDate: string
    exceptionHours: {
        friday: string
        monday: string
        saturday: string
        sunday: string
        thursday: string
        tuesday: string
        wednesday: string
    }
    name: string
    startDate: string
}
export type topic = {
    id: string
    name: string
}
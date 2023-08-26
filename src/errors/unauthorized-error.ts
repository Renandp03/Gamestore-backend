export default function unauthorizedError(message?:string){
    return {
        name:'unauthorizedError',
        message: message || 'unauthorizedError',
    }
}
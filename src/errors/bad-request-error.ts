export default function badRequestError(message?:string){
    return {
        name:'badRequestError',
        message: message || 'Bad request.',
    }
}
export default function notFoundError(message?:string){
    return {
        name:'notFound',
        message: message ||'No results for this search.',
    }
}
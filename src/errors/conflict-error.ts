export default function conflictError(message?:string){
    return {
        name:'Email already exist error.',
        message: message || 'This email can not be used.',
    }
}
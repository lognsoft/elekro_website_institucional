export default function(text:string, limit:number):string {
    if(text.length <= limit + 1) return text;
    let newText:string = text.substring(0, limit);

    newText += '...';

    return newText;
}
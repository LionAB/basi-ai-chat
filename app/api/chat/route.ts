import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { OpenAIStream ,StreamingTextResponse} from 'ai';

const openai = new OpenAI({ apiKey:"lm-studio",baseURL:"http://localhost:1234/v1"})

export async function POST(req:Request){
    try{
        const {messages} = await req.json()
        const response = await openai.chat.completions.create({
            model:"lm-studio",
            stream:true,
            messages
        })
        const stream = OpenAIStream(response)
        return new StreamingTextResponse(stream)
        }catch(error :any){
        return new NextResponse(error.message || 'Aïe... Erreur',{status:500})
    }
}
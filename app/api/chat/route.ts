import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { OpenAIStream ,StreamingTextResponse} from 'ai';

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '', // Ensure to provide a default value or handle missing environment variables
    baseURL: process.env.NEXT_PUBLIC_OPENAI_API_BASEURL || '', // Ensure to provide a default value or handle missing environment variables
});

const model = process.env.NEXT_PUBLIC_OPENAI_MODEL || '';

export async function POST(req:Request){
    
    try{
        const {messages} = await req.json()
        const response = await openai.chat.completions.create({
            model:model,
            stream:true,
            messages
        })
        const stream = OpenAIStream(response)
        return new StreamingTextResponse(stream)
        }catch(error :any){
        return new NextResponse(error.message || 'Aïe... Erreur',{status:500})
    }
}
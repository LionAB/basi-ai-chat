import * as React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AssistantChatCard } from './AssistantChatCard';
import { UserChatCard } from './UserChatCard';
import { Terminal} from 'lucide-react';
import { useEffect, useRef } from 'react';

interface IMessage {
    role:string
    content:string
}

interface IChatWindowProps {
    messages:IMessage[]
    scrollAreaRef:React.RefObject<HTMLDivElement>,
}

export const ChatWindow : React.FC<IChatWindowProps> = ({
    messages, 
    scrollAreaRef,
}) => {
  
    return(
        <ScrollArea className='mb-2 h-[400px] rounded-md border p-4' ref={scrollAreaRef}>

            {messages.map((message, index) => 
            message.role === 'assistant' ? 
            (
                <AssistantChatCard key={index} text={message.content}/>
            ):(
                <UserChatCard key={index} text={message.content}/>
            )
            )}
          
        </ScrollArea>
    )
}
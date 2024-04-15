import * as React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import{ BotMessageSquare} from 'lucide-react'

  export function AssistantChatCard( {text=""}){
    return( 
        <div className='mb-[25px] ml-[25px] mt-[20px]'>
            <Card className="w-[350px] bg-muted">
                <CardHeader>
                
                    <CardTitle>
                        <div className='flex '>
                            <Avatar>
                                <AvatarFallback><BotMessageSquare className='mb-2'/></AvatarFallback>
                            </Avatar>
                            <div className='flex-1 align-center'>Assistant</div>
                        </div>
                    </CardTitle>
                    <CardDescription>{text}</CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
  };
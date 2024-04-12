import * as React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  export function AssistantChatCard( {text=""}){
    return( 
        <div className='mb-[25px] ml-[25px] mt-[20px]'>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Assistant</CardTitle>
                    <CardDescription>{text}</CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
  };
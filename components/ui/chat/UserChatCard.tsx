import * as React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  export function UserChatCard( {text=""}){
    return( 
        <div className='mb-[25px] ml-[25px] mt-[20px] flex items-end justify-end'>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>User</CardTitle>
                    <CardDescription>{text}</CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
  };
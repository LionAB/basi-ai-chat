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

  export function UserChatCard( {text=""}){
    return( 
        <div className='mb-[25px] ml-[25px] mt-[20px] flex items-end justify-end'>
            <Card className="w-[350px]  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90">
                <CardHeader>
                
                    <CardTitle>
                        <div className='flex gap-1'>
                            <Avatar>
                                <AvatarFallback className='text-primary'>U</AvatarFallback>
                            </Avatar>
                        <div className='flex-1 self-center mr-1'> User</div>    
                        </div>
                    </CardTitle>
                    <CardDescription className='text-primary-foreground'>{text}</CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
  };
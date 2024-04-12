import React from "react";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "../button";


interface Props {
    isDisabled: boolean
    isLoading: boolean
    inputText: string
    handleKeyDown: any
    handleSendMessage: any
    setInputText: any
  }

export const MessageInput : React.FC<Props> =  ({
    isDisabled,
    isLoading,
    inputText,
    handleKeyDown,
    handleSendMessage,
    setInputText,
}) => {
    const placeholder = isDisabled ? 
    'Entrez votre clé OpenAI API au dessus wait...' : 'Entrez votre message ici ...';

    return (
        <div className="flex items-center justify-center">
            <Textarea
                className="w-[100%]"
                placeholder={placeholder}
                value={inputText}
                onChange ={(e)=> setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isDisabled || isLoading}
            />
            <Button
                className="ml-[20px] w-[15%]"
                onClick={handleSendMessage}
                disabled={isDisabled || isLoading}
            >
            Envoyer
            </Button>    
        </div>
    )

}
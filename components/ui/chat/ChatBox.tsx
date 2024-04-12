/* "use client"
import * as React from "react"
import { OpenAIAPIKeyInput } from "./OpenaiAPIKeyInput"
import { ChatWindow } from "./ChatWindow"
import { MessageInput } from "./MessageInput"
import { useCallback, useState, useRef, useEffect } from "react"
//@ts-ignore
import { fetchEventSource } from "@microsoft/fetch-event-source"

export function ChatBox() {
  const [oaiKey, setOaiKey] = useState("")
  const [messages, setMessages] = useState([
    { sender: "assistant", text: "Good morning! What can I do for you today?" },
  ])
  const [inputText, setInputText] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = useCallback(async () => {
    if (inputText.trim() !== "" && !isLoading) {
      setIsLoading(true)
      setInputText("")

      const userMessage = { sender: "user", text: inputText.trim() }
      const assistantMessage = { sender: "assistant", text: "" }

      setMessages([...messages, userMessage, assistantMessage])

      // Extract assistant and user messages
      const userMessages = messages
        .filter((msg) => msg.sender === "user")
        .map((msg) => msg.text)
      userMessages.push(inputText.trim()) // include the new user message
      const assistantMessages = messages
        .filter((msg) => msg.sender === "assistant")
        .map((msg) => msg.text)

      try {
        let currentStreamedText = ""

        await fetchEventSource("/api/chat", {
          method: "POST",
          body: JSON.stringify({
            key: oaiKey,
            chatModel: "lm-studio",
            PROMPT: "You are an ai assistant.",
            a: JSON.stringify(assistantMessages),
            u: JSON.stringify(userMessages),
          }),
          headers: { "Content-Type": "application/json" },
          onmessage(ev:any) {
            if (ev.data) {
              currentStreamedText += ev.data
            } else {
              currentStreamedText += "\n"
            }

            setMessages((prevMessages) => {
              const newMessages = [...prevMessages]
              const lastMessageIndex = newMessages.length - 1

              newMessages[lastMessageIndex] = {
                ...newMessages[lastMessageIndex],
                text: currentStreamedText,
              }

              return newMessages
            })
          },
          onerror(err:any) {
            console.error("EventSource failed:", err)
            setIsLoading(false)
          },
          onclose() {
            setMessages((prevMessages) => {
              const newMessages = [...prevMessages]
              const lastMessageIndex = newMessages.length - 1

              newMessages[lastMessageIndex] = {
                ...newMessages[lastMessageIndex],
              }
              setIsLoading(false)
              return newMessages
            })
          },
        })
      } catch (error) {
        console.error("Error:", error)
        setIsLoading(false)
      }
    }
  }, [inputText, isLoading, messages, oaiKey])

  //@ts-ignore
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleSendMessage()
      event.preventDefault()
    }
  }

  const isDisabled = !oaiKey
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isLoading && scrollAreaRef.current) {
      scrollAreaRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isLoading])

  return (
    <section>
      <OpenAIAPIKeyInput oaiKey={oaiKey} setOaiKey={setOaiKey} />
      <ChatWindow messages={messages} scrollAreaRef={scrollAreaRef} />
      <MessageInput
        isDisabled={isDisabled}
        isLoading={isLoading}
        inputText={inputText}
        handleKeyDown={handleKeyDown}
        handleSendMessage={handleSendMessage}
        setInputText={setInputText}
      />
    </section>
  )
} */

'use client'
import { useChat } from 'ai/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SendHorizontalIcon } from 'lucide-react';
import { ChatWindow } from './ChatWindow';
import {  useEffect, useRef } from 'react';
export function ChatBox() {
  const ref =useRef<HTMLDivElement>(null);
  const {messages,input,handleInputChange,handleSubmit,isLoading,error} = 
  useChat(
   
  );
  useEffect(() => {
    if (ref.current === null){
      console.log('ref is null')
      return
    } 
    console.log('scrolling')
    ref.current.scrollTop = ref.current.scrollHeight
  }, [messages])

  return(
    <section className=' text-zinc-700' >
    
      
        <div className='container flex h-screen flex-col items-center justify-center'>
          <h1 className='font-serif text-2xl font-medium'>AI Chatbot</h1>
         <div className='mt-4 w-full max-w-lg'>
         <ChatWindow scrollAreaRef={ref} messages={messages} />
        <form onSubmit={handleSubmit} className='relative'>
         

    
            <Input
              name='message'
              value={input}
              onChange={handleInputChange}
              placeholder={
               'Ask me anything...'}
              className='pr-12 placeholder:italic placeholder:text-zinc-600/75 focus-visible:ring-zinc-500'
            />
            <Button
              size='icon'
              type='submit'
              variant='secondary'
              disabled={isLoading}
              className='absolute right-1 top-1 h-8 w-10'
            >
              <SendHorizontalIcon className='h-5 w-5 bg-secondary' />
            </Button>
          </form> 
          </div>

        </div>
    </section>
  )
}
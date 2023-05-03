import { Text, Pressable } from 'react-native';
import React from 'react';
import clsx from 'clsx';
type CButtonProps = {title: string, className?:string, textClassName?:string, [key:string]:any}
export default function CButton({title,className,textClassName,...rest}:CButtonProps) { 
  return (
    <Pressable className={clsx('py-3 px-8 items-center bg-green-700 rounded-3xl m-4' , className && className)} {...rest}><Text className={clsx( 'text-white ' , textClassName && textClassName)}>{title}</Text></Pressable>
  )
}

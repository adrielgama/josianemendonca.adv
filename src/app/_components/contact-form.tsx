'use client'
import React from 'react'

import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Form as FormComponent,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import * as z from 'zod'
import { toast } from 'sonner'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Seu nome precisa ter mais que 2 caracteres.',
    })
    .max(30, {
      message: 'Seu nome não pode ter mais que 30 caracteres.',
    }),
  email: z
    .string({
      required_error: 'Informe um e-mail válido.',
    })
    .email({ message: 'Formato inválido.' }),
  phone: z
    .string({
      required_error: 'Informe um telefone válido.',
    })
    .refine((value) => /^\(\d{2}\) \d{5}-\d{4}$/.test(value), {
      message: 'Formato inválido. Use (00) 00000-0000.',
    }),
  message: z.string().max(200).optional(),
})

export type ProfileFormValues = z.infer<typeof formSchema>

const userId = process.env.VITE_USERID as string
const serviceId = process.env.VITE_SERVICEID as string
const templateId = process.env.VITE_TEMPLATEID as string

export const Form = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [emailValue, setEmailValue] = React.useState('')
  const [nameValue, setNameValue] = React.useState('')

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })

  const numberFormat = (value: string) => value.match(/\(\d{2}\) \d{5}-\d{4}/g)

  emailjs.init(userId)

  async function onSubmit({ name, email, phone, message }: ProfileFormValues) {
    try {
      const templateParams = {
        name,
        email,
        phone,
        message: message ?? '',
      }

      await emailjs.send(serviceId, templateId, templateParams, userId)
    } catch (error) {
      toast.error('Encontramos um problema.', {
        description: `Entre em contato com o admin e informe o erro: ${error}`,
      })
    } finally {
      toast.success('Enviado com sucesso')
    }
  }

  const handleChangePhoneNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value

    const formattedValue = inputValue.replace(/\D/g, '')
    const formattedPhoneNumber = `(${formattedValue.slice(
      0,
      2
    )}) ${formattedValue.slice(2, 7)}-${formattedValue.slice(7, 11)}`
    setPhoneNumber(formattedPhoneNumber)

    const numericValue = numberFormat(inputValue)
    form.setValue('phone', numericValue ? numericValue[0] : '')
  }

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setEmailValue(inputValue)
    form.setValue('email', inputValue || '')
  }

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setNameValue(inputValue)
    form.setValue('name', inputValue || '')
  }

  return (
    <FormComponent {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 lg:w-96"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-josiane-gold-400">Nome</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="border-josiane-gold-400/20"
                  placeholder="Nome"
                  value={nameValue}
                  onChange={handleChangeName}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-josiane-gold-400">E-mail</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="border-josiane-gold-400/20"
                  placeholder="exemplo@exemplo.com"
                  value={emailValue}
                  onChange={handleChangeEmail}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-josiane-gold-400">Telefone</FormLabel>
              <FormControl>
                <Input
                  className="border-josiane-gold-400/20"
                  {...field}
                  maxLength={15}
                  placeholder="(00) 00000-0000"
                  value={phoneNumber}
                  onChange={handleChangePhoneNumber}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-josiane-gold-400">Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Insira sua mensagem (opcional)"
                  className="border-josiane-gold-400/20 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button
            variant="josiane"
            type="submit"
            size="sm"
            className="mt-2 flex cursor-pointer rounded-none text-xs transition-all"
          >
            Enviar mensagem
            <ChevronRight />
          </Button>
        </div>
      </form>
    </FormComponent>
  )
}

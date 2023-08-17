import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import {
  Form as FormComponent,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Textarea } from "@/components/ui/textarea";
import { RiArrowRightSLine } from "react-icons/ri";

import { ProfileFormValues, formSchema } from "./schema";

const userId = import.meta.env.VITE_USERID as string;
const serviceId = import.meta.env.VITE_SERVICEID as string;
const templateId = import.meta.env.VITE_TEMPLATEID as string;

export const Form = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [nameValue, setNameValue] = React.useState("");

  const { toast } = useToast();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const numberFormat = (value: string) => value.match(/\(\d{2}\) \d{5}-\d{4}/g);

  emailjs.init(userId);

  async function onSubmit({ name, email, phone, message }: ProfileFormValues) {
    try {
      const template_params = {
        name: name,
        email: email,
        phone: phone,
        message: message ?? "",
      };

      await emailjs.send(serviceId, templateId, template_params, userId);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Encontramos um problema.",
        description: `Entre em contato com o admin e informe o erro: ${error}`,
        duration: 5000,
        className: "bg-red-400 text-white",
        action: <ToastAction altText="fechar alerta">Fechar</ToastAction>,
      });
    } finally {
      toast({
        variant: "default",
        title: "Enviado com sucesso",
        description: "Logo entraremos em contato.",
        duration: 5000,
        className: "bg-white",
        action: <ToastAction altText="fechar alerta">Fechar</ToastAction>,
      });
    }
  }

  const handleChangePhoneNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;

    const formattedValue = inputValue.replace(/\D/g, "");
    const formattedPhoneNumber = `(${formattedValue.slice(
      0,
      2
    )}) ${formattedValue.slice(2, 7)}-${formattedValue.slice(7, 11)}`;
    setPhoneNumber(formattedPhoneNumber);

    const numericValue = numberFormat(inputValue);
    form.setValue("phone", numericValue ? numericValue[0] : "");
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setEmailValue(inputValue);
    form.setValue("email", inputValue ? inputValue : "");
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setNameValue(inputValue);
    form.setValue("name", inputValue ? inputValue : "");
  };

  return (
    <FormComponent {...form}>
      <Toaster />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 mt-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gold">Nome</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="border-gold/20"
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
              <FormLabel className="text-gold">E-mail</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="border-gold/20"
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
              <FormLabel className="text-gold">Telefone</FormLabel>
              <FormControl>
                <Input
                  className="border-gold/20"
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
              <FormLabel className="text-gold">Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Insira sua mensagem (opcional)"
                  className="resize-none border-gold/20"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-gradient-to-tr from-gold to-gold-gradient rounded-full text-center text-white px-2 text-xs mt-2 max-w-[170px] h-7 flex items-center justify-between"
          >
            <p className="pr-4">Enviar mensagem</p>
            <div className="text-wine600 bg-white rounded-full">
              <RiArrowRightSLine size={20} />
            </div>
          </button>
        </div>
      </form>
    </FormComponent>
  );
};

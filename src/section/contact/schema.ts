import * as z from 'zod'

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
    .regex(
      /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
      'Formato inválido'
    ),
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

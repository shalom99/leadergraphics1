'use client'
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool} from '@hookform/devtools'

type Inputs = {
  example: string,
  exampleRequired: string,
};

type FormValues = {
  username: string
  email: string
  channel: string
}

export default function Page() {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "batman",
      email: "",
      channel: "",
    }
  })
  const { register, handleSubmit, control, formState} = form;
  const {errors} = formState

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted', data)
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center" noValidate>
      <div className="mb-5">


      <label htmlFor="username">Username</label>
      <input type="text" id="username" className="border-2" 
      {...register("username", {
        required: {
          value: true,
          message: 'username is required'
        }
      })} />
      <p className="text-red-700">{errors.username?.message}</p>
      </div>

      <div className="mb-5">
      <label htmlFor="email">Email</label>
      <input type="text" id="email" className="border-2"  {...register("email", {
         pattern: {
          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message: "Invalid email format"
        },
        required: 'email is required',
        validate: {
          notAdmin: (fieldValue) => {
            return fieldValue !== "admin@example.com" || "Enter a different email address"
          },
          notBlackListed: (fieldValue) => {
            return !fieldValue.endsWith("baddomain.com") || "This domain is not supported"
          } 
        },
      
      })} />
       <p className="text-red-700">{errors.email?.message}</p>
       </div>
       <div>
      <label htmlFor="channel">channel</label>
      <input type="text" id="channel" className="border-2"  {...register("channel", {
        required: 'channel is required'
      })} />
       <p className="text-red-700">{errors.channel?.message}</p>
       </div>
      <button className="border-2 bg-blue-600 text-white p-2 rounded-full" >Submit</button>
    </form>
    <Button>Click me </Button>
    <DevTool control={control} />
    </div>
   
  );
}
import { Button } from "@/components/Button/button"
import { Input } from "@/components/InputGeneral"
import { BoxForm, ContainerCenter as Container, LinkRoute, Title } from "@/ui/styles/utils"
import { Mail } from "lucide-react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

export default function Register(){
  const { handleSubmit: submit } = useForm();

  return(
    <Container>
      <BoxForm>
        <form onSubmit={submit(() => {
          console.log('tudo ok')
        }, )}
        >

          <Title>
            Seja bem vindo, inicie seu cadastro na plataforma e
            aproveite as funcionalidades para organizar seu dia a dia.
          </Title>

          <Input.Root>
            <Input.Label text='Email' for='email' className='text-white cursor-pointer'/>
            <Input.Icon icon={Mail} className='stroke-zinc-100'/>
            <Input.Input disabled={false} type='email' id="email" className='pl-8 bg-transparent text-white'/>
          </Input.Root>

          <Input.Root>
            <Input.Input disabled={false} type='password' placeholder='Senha' id="password" className="bg-transparent text-white"/>
          </Input.Root>

          <Input.Root>
            <Input.Input disabled={false} type='password-confirm' placeholder='Corfirmar senha' id="password-confirm" className="bg-transparent text-white"/>
          </Input.Root>

          <Input.Root>
            <Input.Input disabled={false} type='text' placeholder='CEP' id="cep" className="bg-transparent text-white"/>
          </Input.Root>

          <Input.Root>
            <Input.Input disabled={false} type='text' placeholder='CPF/CNPJ' id="cpf/cnpj" className="bg-transparent text-white"/>
          </Input.Root>

          <Button bg="#2E457E" size="project">
            Enviar
          </Button>

          <LinkRoute>
            Já possui cadastro? <Link to='/'>Login</Link>
          </LinkRoute>
        </form>
      </BoxForm>
    </Container>
  )
}

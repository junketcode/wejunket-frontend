import * as React from "react"
import FormGroup from "../FormGroup/FormGroup"
import { ILoginCredentials } from "../../services/auth.service"

const formFieldDefinition = [
  {
    label: "Email",
    name: "email",
    type: "email",
    inputType: "input",
    placeholder: "john@doe.com",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    inputType: "input",
    placeholder: "********",
  },
]

export const LoginForm = ({ handleSubmitData }) => {
  const [loginCredentials, setLoginCredentials] = React.useState<
    ILoginCredentials
  >({
    email: "",
    password: "",
  })

  const handleValueChange = event => {
    const { name, value } = event.target
    setLoginCredentials({ ...loginCredentials, [name]: value })
  }

  const onSubmit = e => {
    e.preventDefault()
    handleSubmitData(loginCredentials)
  }

  return (
    <form className="w-full border-l border-b border-r p-8" onSubmit={onSubmit}>
      {formFieldDefinition &&
        formFieldDefinition.map(ffDef => (
          <FormGroup
            key={ffDef.name}
            {...ffDef}
            handleValueChange={handleValueChange}
          />
        ))}
      <div className="md:flex md:items-center">
        <div className="md:w-1/3" />
        <div className="md:w-2/3">
          <button
            className="shadow bg-blue-800 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={onSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  )
}

export default LoginForm

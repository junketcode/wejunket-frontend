import * as React from "react"
import SearchBox from "./components/SearchBox/SearchBox"
import { SessionStorageService } from "../../../services/sessionStorage.service"
import { ILoginResponse } from "../../../services/auth.service"

const UserToolBar = () => {
  const stored = SessionStorageService.get("user")
  const loginResponse: ILoginResponse =  JSON.parse(stored);

  const userName =
    loginResponse && loginResponse.user
      ? loginResponse.user.name
      : "Anonymous User"

  return (
    <div className="flex px-2 lg:px-4 h-12 justify-between content-center items-center">
      <h1>Guest User</h1>
      <div className="flex">
        {/*<SearchBox />*/}
      </div>
    </div>
  )
}

export default UserToolBar

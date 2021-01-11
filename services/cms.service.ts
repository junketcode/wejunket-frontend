import environment from "../environment/environment"
import Axios, {AxiosResponse} from "axios"
import {IDynamicPageDefinition} from "../interfaces/page-definitions.types"

export class CmsService {
    static getPageDefinitions(pageKey: string): Promise<AxiosResponse<IDynamicPageDefinition>> {
        try {
            return Axios.get(`${environment.CMS_API_BASE}/pages/${pageKey}`)
        } catch (err) {
            alert(err)
        }
    }
}

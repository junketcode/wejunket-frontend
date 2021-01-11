import { apiRequest } from "../utils/stripe-api.util"
import { loadStripe } from "@stripe/stripe-js"
import environment from "../environment/environment"
import { SessionStorageService } from "./sessionStorage.service"

const axios = require("axios")

export class SubscriptionService {
  static async putUserSubscription(stripeCustId, planId, planName) {
    const token = JSON.parse(sessionStorage.user).token
    const response = await axios({
      method: "put",
      url: `https://api.wejunket.com/cms/profile/subscribe?stripe_cust_id=${stripeCustId}&plan_id=${planId}&plan_name=${planName}`,
      headers: {
        Authorization: "Bearer" + token,
      },
    })
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })

    return response
  }

  static async subscribeToProductPlan(productPlan, planName) {
    const bodyParams = {
      productPlan,
      site: true,
    }
    const stripe = await loadStripe(environment.STRIPE_KEY)
    const response = await apiRequest(
      `${environment.SERVERLESS_ENDPOINT}`,
      "POST",
      bodyParams
    )
      .then(res => {
        const put = this.putUserSubscription(res.customer, productPlan, planName)
        stripe.redirectToCheckout({
          sessionId: res.id,
        })
      })
      .catch(e => {
        console.log(e.message)
      })
  }
}

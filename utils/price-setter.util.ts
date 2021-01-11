import environment from "../environment/environment";

export class PriceSetterUtil {
    static setMonthly(monthly) {
        if(monthly) {
            if(monthly === environment.BUSINESS_MONTHLY) {
                return '$120/month'
            } else if (monthly === environment.JUNKETEER_MONTHLY) {
                return '$175/month'
            } else {
                return 'Pricing Error'
            }
        } else {
            return 'FREE'
        }
    }

    static setYearly(yearly) {
        if(yearly) {
            if(yearly === environment.BUSINESS_YEARLY) {
                return '$99/month'
            } else if (yearly === environment.JUNKETEER_YEARLY) {
                return '$119/month'
            } else {
                return 'Pricing Error'
            }
        } else {
            return 'FREE'
        }
    }

    static setYearlyTotal(yearly) {
        if(yearly) {
            if(yearly === environment.BUSINESS_YEARLY) {
                return '$1,188'
            } else if (yearly === environment.JUNKETEER_YEARLY) {
                return '$1,428'
            } else {
                return 'Pricing Error'
            }
        } else {
            return '$0'
        }
    }
}

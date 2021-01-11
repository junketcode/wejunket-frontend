export class AsyncFetchUtil {
  static async asyncDataFetching(
    serviceCall: any,
    setState: any,
    setLoadingState?: any,
    params?: any
  ) {
    try {
      const response = params ? await serviceCall(params) : await serviceCall()
      setState(response.data)
    } catch (err) {
      console.error(err)
    }
    if(!!setLoadingState)
      setLoadingState(false)
  }
}

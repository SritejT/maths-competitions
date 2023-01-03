import https from 'https'

const terminate = (server: https.Server, options = { coredump: false, timeout: 1000}) => {

  return (code: any, reason: string) => (err: any, promise?: any) => {

    console.log("Server is now closing because: ", reason)

    const exit = () => {
      options.coredump ? process.abort() : process.exit(code)
    }

    if (err && err instanceof Error) {
      console.log('Error:', err.message, err.stack)
    }

    if (promise) {
      console.log('Promise: ', promise)
    }

    server.close(exit)

    setTimeout(exit, options.timeout).unref()
  }
}

export default terminate

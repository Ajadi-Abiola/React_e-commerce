export const setAppData = (setter: any) => (state: any) => {
  // debugger
  // console.log({setter})
  setter && setter((prevstate: any) => ({state}))
}
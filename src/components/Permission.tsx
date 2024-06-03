import { useAuth } from "@/stores/AuthContext";


export const Permission = (props:{code:Array<String>,children: any})=> {
  if (!props.code || props.code.length <= 0) {
    return(props.children)
  }
  const { permissions } = useAuth()
  const p = permissions.filter(item => props.code.includes(item))
  if (p && p.length > 0) {
    return(props.children)
  } else {
    return
  }
}
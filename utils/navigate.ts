import { useRouter } from 'vue-router'

export const useNavigate = () => {
  const router = useRouter()

  const navigate = (path: string,hash:string="") => {
    router.push({ path,hash })
  }

  return {
    navigate,
  }
}

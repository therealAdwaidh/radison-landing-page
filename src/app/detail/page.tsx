import {auth,currentUser} from "@clerk/nextjs/server"
export  default function Home() {

  const authObj = await auth()
  const userObj = await currentUser()

  console.log(authObj)
  console.log(userObj)
  return(
    <div className="">
      hello
    </div>
  )
}
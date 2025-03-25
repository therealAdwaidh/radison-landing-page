import { revalidatePath } from "next/cache";
type MockUser = {
    id:number;
    name:string;
};

export default async function MockUsers(){
    const res = await fetch("https://67e14b6858cc6bf785253382.mockapi.io/users")
    const users = await res.json();

    async function addUser(formData: FormData)  {
        "use server";
        const name= formData.get("name");
        const res=await fetch(
            "https://67e14b6858cc6bf785253382.mockapi.io/users",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({name}),
            }
        );
        const newUser=await res.json();
        revalidatePath("/mock-users")
        console.log(newUser);
    } 
    return(


        <div className="mt-25 items-center justify-center p-6">

            <div className=" flex items-center justify-center w-full">
                <form action="{addUser">
                    <input type="text" name="name" required className="border p-2 mr-2" />
                    <button type="submit" className="bg-blue-700 p-2">Add User</button>
                </form>
            </div>
            <div className="grid grid-cols-4 gap-4 py-8">
            {
                users.map((user:MockUser)=>(
                    <div key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                        {user.name}
                    </div>
                ))
            }
        </div>
        </div>
        
    )
}
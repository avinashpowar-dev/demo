


export default async function updateUsers({ params }: { params: { id: string } }) {
    const { id } = await params;
//     const res = await fetch("http://localhost:3001/users"+id);
//   const users = await res.json();

async function updateUsers(){
    "use server";
    //const { id } = await params;
    // const name = formData.get("name");
    // const email = formData.get("email");
    // const number = formData.get("number");
    // fetch('http://localhost:3001/users/'+id, {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //     name: name,
    //     email: email,
    //     number: number,
    //     }),
    //     headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    // .then((response) => response.json())
    //     .then((json) => console.log(json));
    // revalidatePath("/mock-users");
}

return(
    <form action={updateUsers} className="p-4 md:p-5">
        <h1>{id}</h1>
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label  className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            //value={users.name}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label  className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        
                        <input
                            type="email"
                            name="email"
                            //value={users.email}
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label  className="block mb-2 text-sm font-medium text-gray-900">Number</label>
                        <input
                            type="number"
                            name="number"
                            //value={users.number}
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>
                    
                </div>
                <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                    Update user
                </button>
            </form>
)

}
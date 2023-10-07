function LoginView() {
    return (
        <div className="flex justify-center items-center h-screen bg-blue-500">
            <div className="border-solid border-2 p-8 bg-white rounded-lg shadow-lg">
                <div className="text-center mb-6">
                    <p className="text-lg font-medium">Welcome back</p>
                    <p className="text-slate-400">Sign-in to your account and start the adventure</p>
                </div>
                <form>
            <div className="mb-4">
                <label className="block text-slate-400">Company Email</label>
                <input type="text" id="login" name="login" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="yourname@company.com"/>
            </div>
            <div className="mb-4">
                <label className="block text-slate-400">Password</label>
                <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Password"/>
            </div>
            <div className="text-center">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white w-full py-2 px-4 rounded-md">Sign In</button>
            </div>
        </form>
            </div>
        </div>
    )
}

export default LoginView;
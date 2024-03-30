import { Button } from "@/components/ui/button";

export default function Page() {
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="flex flex-col space-y-4 bg-amber-300">
                <div>
                    <p className="p-4">Login Page</p>
                </div>

                <div>
                    <h1 className="p-4">Login Page</h1>
                </div>
                <div className="p-4">
                    <Button>Login</Button>
                </div>

            </div>
        </div>

    );
}

'use client'

import { Github, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Logo } from "../components/logo"
import Link from "next/link"

export default function LoginPage() {
    const router = useRouter();

    async function handleLogin(event: React.FormEvent) {
        event.preventDefault()

        const res = await signIn("github", {
            callbackUrl: "/dashboard",
            redirect: false,
        });

        if (res?.ok) {
            router.push("/dashboard");
        } else {
            router.push("/unauthorized");
        }
    }

    return (
        <div className="relative flex h-[55rem] items-center justify-center overflow-hidden px-4 py-12 sm:px-6 lg:px-8">           
            <video
                className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/video.mp4" type="video/mp4" />
            </video>            
            <div className="relative z-10 w-full max-w-md">
                <Card className="border-yellow-custom bg-white dark:bg-black text-white shadow-lg shadow-yellow-500/20">
                    <CardHeader className="space-y-1 text-center border-b border-slate-700 pb-6">
                        <div className="flex justify-center mb-4">
                            <Link href="/">
                                <div className="h-20 w-20 rounded-full bg-yellow-custom flex items-center justify-center">
                                    <Logo />
                                </div>
                            </Link>
                        </div>
                        <CardTitle className="text-2xl font-bold text-yellow-custom">Acesso de administrador</CardTitle>
                        <CardDescription className="text-slate-800 dark:text-slate-400">
                            Monte Bot - Somente pessoal Autorizado
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4 pt-6">
                        <div className="bg-slate-100/50 dark:bg-slate-700/50 p-3 rounded-lg border dark:border-slate-600">
                            <div className="flex items-center gap-2 text-amber-400 mb-2">
                                <ShieldAlert className="h-4 w-4" />
                                <span className="text-sm font-medium">Acesso Restrito</span>
                            </div>
                            <p className="text-xs text-slate-900 dark:text-slate-300">
                                Esta área é restrita a administradores de sistema. Caso você não seja, não vai conseguir logar.
                            </p>
                        </div>
                        <form onSubmit={handleLogin}>
                            <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white" type="submit">
                                <Github className="mr-2 h-4 w-4" />
                                Autenticar com GitHub
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4 text-center text-xs text-slate-600 dark:text-slate-400 border-t border-slate-700 pt-6">
                        <div>O acesso ao montebot é monitorado e auditado.</div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

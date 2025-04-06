import { AlertTriangle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UnauthorizedPage() {
    return (
        <div className="flex md:min-h-[55rem] flex-col items-center justify-center px-4 pt-12 md:pt-0 md:py-12 text-white">
            <div className="mx-auto max-w-md text-center">
                <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-red-500/20 p-3">
                        <AlertTriangle className="h-12 w-12 text-red-500" />
                    </div>
                </div>
                <h1 className="mb-4 text-3xl font-bold text-red-400">Acesso negado</h1>
                <p className="mb-6 text-slate-900 dark:text-slate-300">
                    Sua conta do GitHub não está autorizada a acessar o sistema da Monte Bot porque você não é um membro da organização.
                </p>
                <div className="space-y-4">                    
                    <Link href="/">
                        <Button variant="outline"
                            className="dark:border-slate-700 border-slate-300 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-300 hover:bg-slate-400 dark:hover:bg-slate-700">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Retornar para página Principal
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


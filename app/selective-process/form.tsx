"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
    name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    studentId: z.string().min(1, { message: "Matrícula é obrigatória" }),
    modality: z.string().min(1, { message: "A modalidade é obrigatória" }),
    year: z.string().min(1, { message: "O período é obrigatório" }),
    experience: z.string().min(1, { message: "Este campo é obrigatório" }),
    motivation: z.string().min(10, { message: "Por favor, escreva pelo menos 10 caracteres" }),
    skills: z.array(z.string()).optional(),
    availability: z.string().min(1, { message: "Este campo é obrigatório" }),
})

export default function SelectionForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            studentId: "",
            modality: "",
            year: "",
            experience: "",
            motivation: "",
            skills: [],
            availability: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {        
    }

    const skills = [
        { id: "programming", label: "Programação" },
        { id: "electronics", label: "Eletrônica" },
        { id: "mechanics", label: "Mecânica" },
        { id: "3d-printing", label: "Impressão 3D" },
        { id: "design", label: "Design" },
    ]

    if (isSubmitted) {
        return (
            <div className="flex min-h-screen items-center justify-center p-4">
                <Card className="w-full max-w-3xl">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl">Inscrição Recebida!</CardTitle>
                        <CardDescription className="text-center">
                            Obrigado por se inscrever para o processo seletivo do Monte Bot. Entraremos em contato em breve.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        )
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Formulário de Inscrição</CardTitle>
                <CardDescription>
                    Preencha o formulário abaixo para participar do processo seletivo do núcleo de robótica.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome Completo</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Seu nome completo" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid gap-4 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="seu.email@exemplo.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="studentId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Matrícula</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Número de matrícula" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                                control={form.control}
                                name="modality"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Modalidade</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecione" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="web">Web</SelectItem>
                                                <SelectItem value="design">Design</SelectItem>
                                                <SelectItem value="marketing">Marketing</SelectItem>
                                                <SelectItem value="robotics">Robótica</SelectItem>                                                
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="year"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Período</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecione" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="1">1º Período</SelectItem>
                                                <SelectItem value="2">2º Período</SelectItem>
                                                <SelectItem value="3">3º Período</SelectItem>
                                                <SelectItem value="4">4º Período</SelectItem>
                                                <SelectItem value="5">5º Período</SelectItem>
                                                <SelectItem value="6">6º Período</SelectItem>
                                                <SelectItem value="7">7º Período</SelectItem>
                                                <SelectItem value="8">8º Período</SelectItem>                                               
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="experience"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Experiência com Robótica/Programação</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecione seu nível de experiência" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="none">Nenhuma experiência</SelectItem>
                                            <SelectItem value="beginner">Iniciante</SelectItem>
                                            <SelectItem value="intermediate">Intermediário</SelectItem>
                                            <SelectItem value="advanced">Avançado</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="motivation"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Motivação</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Por que você quer fazer parte do Monte Bot?"
                                            className="min-h-[100px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="skills"
                            render={() => (
                                <FormItem>
                                    <div className="mb-2">
                                        <FormLabel>Habilidades</FormLabel>
                                        <FormDescription>Selecione as áreas em que você tem interesse ou habilidades</FormDescription>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {skills.map((skill) => (
                                            <FormField
                                                key={skill.id}
                                                control={form.control}
                                                name="skills"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem key={skill.id} className="flex flex-row items-start space-x-3 space-y-0">
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(skill.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...(field.value || []), skill.id])
                                                                            : field.onChange(field.value?.filter((value) => value !== skill.id))
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">{skill.label}</FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="availability"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Disponibilidade</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecione sua disponibilidade semanal" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="low">Baixa (até 4 horas semanais)</SelectItem>
                                            <SelectItem value="medium">Média (5-8 horas semanais)</SelectItem>
                                            <SelectItem value="high">Alta (mais de 8 horas semanais)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? "Enviando..." : "Enviar Inscrição"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex justify-center text-sm text-muted-foreground">
                Prazo para inscrições: 30/04/2025
            </CardFooter>
        </Card>
    )
}
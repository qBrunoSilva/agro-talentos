import { Button } from "@/components/ui/button";

import Peoples from "../../assets/peoples.svg?react";
import LogoWithName from "../../assets/logo.png";
import { Link } from "react-router-dom";

export function HomePage() {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<header className="h-14 flex items-center px-4 lg:px-6">
				<a className="flex items-center justify-center" href="/">
					<img alt="Agro Talentos logo" src={LogoWithName} className=" w-6" />
				</a>
			</header>
			<main className="flex-1 ">
				<section className="w-full py-6 sm:py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_700px]">
							<div className="overflow-hidden flex items-center justify-center sm:w-full lg:order-last w-[400px]">
								<Peoples className="md:w-[500px] sm:w-full object-cover object-center" />
							</div>
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<p className="inline-block rounded-lg border-gray-100 text-gray-500 text-md dark:bg-gray-800">
										Agro talentos 🌾
										<div className="w-16 h-1 bg-primary rounded dark:bg-primary" />
									</p>
									<h2 className="text-lg font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
										Cultivando oportunidades{" "}
									</h2>
									<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
										Junte-se à colheita dos melhores talentos do agronegócio!
									</p>
								</div>
								<div className="flex flex-col gap-2 min:[400px]:flex-row">
									<Link to="https://typebot.co/agro-talentos" target="_blank">
										<Button variant="default">Acessar chatbot</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
									Agro Talentos
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Interações rápidas. Mais conexão.
								</h2>
								<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									Uma plataforma interativa integrada a um chatbot eficiente,
									oferecendo uma experiência personalizada e prática para o
									usuário.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
							<div className="flex flex-col justify-center space-y-4">
								<ul className="grid gap-6">
									<li>
										<div className="grid gap-1">
											<h3 className="text-xl font-bold">
												Atendimento humanizado
											</h3>
											<p className="text-gray-500 dark:text-gray-400">
												Oferecemos um atendimento humanizado e personalizado
												para o usuário.
											</p>
										</div>
									</li>
									<li>
										<div className="grid gap-1">
											<h3 className="text-xl font-bold">
												Automação de processos
											</h3>
											<p className="text-gray-500 dark:text-gray-400">
												Automatize processos e ganhe eficiência.
											</p>
										</div>
									</li>
									<li>
										<div className="grid gap-1">
											<h3 className="text-xl font-bold">Sem rodeios</h3>
											<p className="text-gray-500 dark:text-gray-400">
												Entre em contato diretamente com o responsável pela
												contratação.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
						<div className="space-y-2 flex flex-col gap-6">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
								Experimente o fluxo de contratação com o qual as empresas de
								agronegócio se identificam.
							</h2>
							<Link to="https://typebot.co/agro-talentos" target="_blank">
								<Button variant="default" className="w-full">
									Saiba mais
								</Button>
							</Link>
						</div>
					</div>
					{/* <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end"> */}
					{/* </div> */}
				</section>
			</main>
		</div>
	);
}

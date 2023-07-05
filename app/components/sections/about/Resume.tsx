import Image from "next/image";
import { WorkRole } from "@/app/data/work";
import { BriefcaseIcon } from "../../icons/BriefcaseIcon";
import { format } from "date-fns";

interface WorkRoleProps {
	WorkRoles: WorkRole[];
}

export function Resume({ WorkRoles }: WorkRoleProps) {
	return (
		<div className="max-w-[420px] rounded-2xl border p-6 border-zinc-700/40 bg-transparent-white">
			<h2 className="flex text-sm font-semibold ">
				<BriefcaseIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">Work</span>
			</h2>
			<ol className="mt-6 space-y-4">
				{WorkRoles.map((role, roleIndex) => {

					
					const startDate = format(role.start, "MMM yyyy");
					const endDate = role.end ? format(role.end, "MMM yyyy") : "Present";

					return (
						<li key={roleIndex} className="flex gap-4">
							<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-900/5 ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
								<Image
									src={role.logo}
									alt="Logo"
									className="h-7 w-7 rounded-full object-cover"
									unoptimized
								/>
							</div>
							<dl className="flex flex-auto flex-wrap gap-x-2">
								<dt className="sr-only">Company</dt>
								<dd className="flex-none font-bold text-zinc-100">
									{role.company}
								</dd>
								<dt className="sr-only">Date</dt>
								<dd
									className="md:ml-auto text-xs text-zinc-400 dark:text-zinc-500"
									aria-label={`${startDate} until ${endDate}`}
								>
									<time dateTime={endDate}>{startDate}</time>{" "}
									<span aria-hidden="true">—</span>{" "}
									<time dateTime={endDate}>{endDate}</time>
								</dd>
								<dt className="sr-only">Role</dt>
								<dd className="w-full text-xs text-zinc-500 dark:text-zinc-400">
									{role.title}
								</dd>
							</dl>
						</li>
					);
				})}
			</ol>
		</div>
	);
}

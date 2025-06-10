import Image from "next/image";
import { WorkRole } from "@/app/data/work";
import { BriefcaseIcon } from "../../icons/BriefcaseIcon";
import { format } from "date-fns";

interface WorkRoleProps {
	WorkRoles: WorkRole[];
}

export function Resume({ WorkRoles }: WorkRoleProps) {
	return (
		<div className="w-full max-w-[420px] mx-auto lg:mx-0 rounded-2xl border p-4 sm:p-6 border-zinc-700/40 bg-transparent-white overflow-hidden">
			<h2 className="flex text-sm sm:text-base font-semibold">
				<BriefcaseIcon className="h-5 w-5 sm:h-6 sm:w-6 flex-none" />
				<span className="ml-2 sm:ml-3">Work</span>
			</h2>
			<ol className="mt-4 sm:mt-6 space-y-4">
				{WorkRoles.map((role, roleIndex) => {
					const startDate = format(role.start, "MMM yyyy");
					const endDate = role.end ? format(role.end, "MMM yyyy") : "Present";

					return (
						<li key={roleIndex} className="flex gap-3 sm:gap-4">
							<div className="relative mt-1 flex h-8 w-8 sm:h-10 sm:w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-900/5 ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
								<Image
									src={role.logo}
									alt={`${role.company} logo`}
									className="h-5 w-5 sm:h-7 sm:w-7 rounded-full object-cover"
									width={28}
									height={28}
								/>
							</div>
							<dl className="flex flex-auto flex-col gap-y-1 min-w-0">
								<div className="flex text-sm md:text-base items-center justify-between">
									<dt className="sr-only">Company</dt>
									<dd className="font-bold text-zinc-100 text-xs sm:text-sm">
										{role.company}
									</dd>
									<dt className="sr-only">Date</dt>
									<dd
										className="text-xs text-zinc-400 ml-auto whitespace-nowrap"
										aria-label={`${startDate} until ${endDate}`}
									>
										<time dateTime={endDate}>{startDate}</time>{" "}
										<span aria-hidden="true">—</span>{" "}
										<time dateTime={endDate}>{endDate}</time>
									</dd>
								</div>

								<dt className="sr-only">Role</dt>
								<dd className="text-xs text-zinc-500">{role.title}</dd>
							</dl>
						</li>
					);
				})}
			</ol>
		</div>
	);
}

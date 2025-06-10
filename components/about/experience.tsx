import { WorkRole } from "@/app/data/work";
import format from "date-fns/format";

interface WorkRoleProps {
	WorkRoles: WorkRole[];
}

export function ExperienceSection({ WorkRoles }: WorkRoleProps) {
	return (
		<section className="mx-auto w-full pb-32 px-5 md:px-0">
			<header>
				<h2 className="text-3xl md:text-4xl font-bold text-gradient ">
					Work Experience
				</h2>
			</header>
			<div className="flex flex-col mt-8 space-y-8">
				{WorkRoles.map((role, roleIndex) => {
					const startDate = format(role.start, "MMM yyyy");
					const endDate = role.end ? format(role.end, "MMM yyyy") : "Present";

					return (
						<div
							key={roleIndex}
							className="border border-zinc-700/40 rounded-lg p-6 bg-transparent-white"
						>
							<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
								<div className="flex-1">
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={role.url}
										className="group"
									>
										<h3 className="text-lg font-semibold group-hover:underline text-zinc-100">
											{role.company}
										</h3>
									</a>
									<p className="text-md text-zinc-300 mt-1">{role.title}</p>
									<div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-400 mt-2">
										<span>{role.employmentType}</span>
										<span>•</span>
										<span>{role.location}</span>
										<span>•</span>
										<span>{role.locationType}</span>
									</div>
								</div>
								<div className="text-sm text-zinc-400 mt-2 md:mt-0 md:text-right">
									{startDate} - {endDate}
								</div>
							</div>

							{role.description && (
								<p className="text-sm text-zinc-300 mb-4">{role.description}</p>
							)}

							{role.technologies && role.technologies.length > 0 && (
								<div className="mb-4">
									<h4 className="text-sm font-medium text-zinc-200 mb-2">
										Technologies
									</h4>
									<div className="flex flex-wrap gap-2">
										{role.technologies.map((tech, index) => (
											<span
												key={index}
												className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-zinc-800 text-zinc-300 border border-zinc-700"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							)}

							{role.achievements && role.achievements.length > 0 && (
								<div className="mb-4">
									<h4 className="text-sm font-medium text-zinc-200 mb-2">
										Key Achievements
									</h4>
									<ul className="space-y-1">
										{role.achievements.map((achievement, index) => (
											<li
												key={index}
												className="text-sm text-zinc-300 flex items-start"
											>
												<span className="text-green-400 mr-2 mt-1">•</span>
												{achievement}
											</li>
										))}
									</ul>
								</div>
							)}

							{role.keyResponsibilities &&
								role.keyResponsibilities.length > 0 && (
									<div>
										<h4 className="text-sm font-medium text-zinc-200 mb-2">
											Key Responsibilities
										</h4>
										<ul className="space-y-1">
											{role.keyResponsibilities.map((responsibility, index) => (
												<li
													key={index}
													className="text-sm text-zinc-400 flex items-start"
												>
													<span className="text-zinc-500 mr-2 mt-1">•</span>
													{responsibility}
												</li>
											))}
										</ul>
									</div>
								)}
						</div>
					);
				})}
			</div>
		</section>
	);
}

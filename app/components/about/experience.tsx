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
      <ul className="flex flex-col mt-5">
        {WorkRoles.map((role, roleIndex) => {
      const startDate = format(role.start, "MMM yyyy");
			const endDate = role.end ? format(role.end, "MMM yyyy") : "Present";


          return (
            <li key={roleIndex} className="mt-5">
              <a 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row justify-between w-full"
              href={role.url}>

              <div>

              <h3 className="font-semibold group-hover:underline text-sm ">
                {role.company}
              </h3>
              <p className="text-grey-dark text-xs flex-none ">{role.title}</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-4 justify-between w-full sm:max-w-fit">
                <h4 className="text-grey-dark mt-1 ">
                    {startDate} - {endDate}
                </h4>
              </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

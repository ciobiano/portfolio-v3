import React from "react";
import { skills } from "../../../data/skills";
import { Button } from "../../utils/Button";
import Icon from "@mdi/react";

type Props = {};

const Skill = (props: Props) => {
	return (
		<div className="mx-auto py-10 ">
			<h1 className="text-sm border-b border-off-white w-max font-extrabold ">
				Tech Stack
			</h1>
			<div className="flex flex-wrap py-10 gap-3">
				{skills.map((skill, index) => (
					<li key={index}>
						<Button variant="secondary" size="small">
							<Icon path={skill.iconPath} color={skill.color} size={0.8} />

							{skill.name}
						</Button>
					</li>
				))}
			</div>
		</div>
	);
};

export default Skill;

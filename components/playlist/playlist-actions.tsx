import { BsPlayFill } from "react-icons/bs";

import { Button } from "@/components/shadcn/button";

export const PlaylistActions = () => {
	return (
		<div className="p-6">
			<Button
				type="button"
				className="w-14 h-14 rounded-full bg-primary mr-6 hover:bg-primaryHighlight hover:scale-110"
			>
				<span className="w-6 h-6 text-black">
					<BsPlayFill className="w-full h-full" />
				</span>
			</Button>
			<button type="button"></button>
		</div>
	);
};

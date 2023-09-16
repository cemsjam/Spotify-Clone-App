import React from "react";

interface SectionListProps {
	data: { id: number; creator?: string; type: string; songs?: number; coverImage: string }[];
}

export const SectionList = ({ data }: SectionListProps) => {
	return (
		<div>
			{data.map((item) => (
				<SectionCard key={item.id} />
			))}
		</div>
	);
};

export const SectionCard = () => {
	return <div>card</div>;
};

interface SkillItemProps {
  name: string;
}

export default function SkillItem({ name }: SkillItemProps) {
  return (
    <span className="bg-gray-800 text-gray-200 text-sm font-medium py-1.5 px-3 rounded-full">
      {name}
    </span>
  );
}

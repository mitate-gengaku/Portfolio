interface Props {
  className?: string;
  lists: string[];
  hover?: boolean;
}

export const List = (props: Props) => {
  const { className = "pl-4", lists, hover = true } = props;

  return (
    <ul className={className}>
      {!lists.length && <li className={"list-[square]"}>Nothing</li>}
      {lists.map((list, i) => (
        <li className={"list-[square]"} key={`${list}-${i}`}>
          {hover ? (
            <span className="w-fit hover:bg-green-500 hover:text-[#222225]">
              {list}
            </span>
          ) : (
            list
          )}
        </li>
      ))}
    </ul>
  );
};

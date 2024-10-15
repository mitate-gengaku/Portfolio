export const PacmanProgress = (props: { progress: number }) => {
  const MAX_BLOCKS = 10;
  const currentBlock = Math.min(
    Math.floor((props.progress / 100) * MAX_BLOCKS),
    MAX_BLOCKS - 1,
  );

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center text-3xl leading-7">
        {"-".repeat(currentBlock)}
        {props.progress >= 100 ? "-".repeat(1) : "c".repeat(1)}
        {"-".repeat(MAX_BLOCKS - currentBlock - 1)}
      </div>
    </div>
  );
};

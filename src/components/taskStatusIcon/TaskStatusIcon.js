const TaskStatusIcon = ({ completionStatus }) => {
  const isTaskHaveBeenCompleted = completionStatus;
  return (
    <>
      {isTaskHaveBeenCompleted ? (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="15" fill="#8EC63F" />
          <path
            d="M10 14.8519L13.4286 19L20 11"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="15" fill="#FE4B64" />
          <path
            d="M13.5195 9.8H16.4955L15.9995 17.112H14.0155L13.5195 9.8ZM15.0075 21.128C14.5702 21.128 14.2022 20.9893 13.9035 20.712C13.6155 20.424 13.4715 20.0773 13.4715 19.672C13.4715 19.2667 13.6155 18.9307 13.9035 18.664C14.1915 18.3867 14.5595 18.248 15.0075 18.248C15.4555 18.248 15.8235 18.3867 16.1115 18.664C16.3995 18.9307 16.5435 19.2667 16.5435 19.672C16.5435 20.0773 16.3942 20.424 16.0955 20.712C15.8075 20.9893 15.4448 21.128 15.0075 21.128Z"
            fill="white"
          />
        </svg>
      )}
    </>
  );
};

export default TaskStatusIcon;

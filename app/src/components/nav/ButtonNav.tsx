
export const ButtonNav = (props: any) => {
  return props.active==true ? (
    <a
      href={props.href}
      className="justify-center items-center bg-black flex mt-3 py-3 rounded-[30px]"
    >
      <div className="flex gap-2.5">
        <img src={props.icon} alt="" />
        <span className="text-white font-Poppins text-xl font-semibold self-center grow whitespace-nowrap my-auto">
          {props.title}
        </span>
      </div>
    </a>
  ) : (
    <a
      href={props.href}
      className="justify-center items-center bg-white flex mt-3 py-3 rounded-[30px]"
    >
      <div className="flex gap-2.5">
        <img src={props.icon} alt="" />
        <span className="text-black font-Poppins text-xl font-semibold self-center grow whitespace-nowrap my-auto">
          {props.title}
        </span>
      </div>
    </a>
  );
};

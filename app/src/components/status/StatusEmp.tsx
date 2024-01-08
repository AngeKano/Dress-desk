
export const StatusEmp = (props: any) => {
  return props.employeStatut == "Libre" ||
    props.employeStatut == "Disponnible" ? (
    <div className="bg-emerald-500 bg-opacity-20 flex justify-center px-3 py-2  gap-2 rounded-full items-center">
      <img src="/icons/Disponible.svg" alt="" />
      <span className="text-emerald-500 text-xl font-semibold">
        Disponnible
      </span>
    </div>
  ) : (
    <div className="bg-fuchsia-800 bg-opacity-20 flex justify-center p-1 gap-2 rounded-full items-center">
      <img src="/icons/Occupe.svg" alt="" />
      <span className="text-fuchsia-800 text-xl font-semibold">Occuper</span>
    </div>
  );
};

import { useState, useMemo } from "react";
import { apiDepartments } from "../../api/api";
import RenderDepartments from "../../components/RenderDepartments/RenderDepartments";

const Departments = () => {
  const [departments, setDepartments] = useState(null);

  useMemo(() => {
    apiDepartments(setDepartments);
  }, []);

  return (
    <main>
      <RenderDepartments departments={departments} />
    </main>
  );
};

export default Departments;

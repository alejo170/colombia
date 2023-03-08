import axios from "axios";

export const apiInfoColombia = async (state) => {
  const infoColombia = await axios.get(
    "https://api-colombia.com/api/v1/Country/Colombia"
  );
  state(infoColombia.data);
};

export const apiDepartments = async (state) => {
  const departments = await axios.get(
    "https://api-colombia.com/api/v1/Department"
  );
  state(departments.data);
};

export const apiPresidents = async (state) => {
  const presidents = await axios.get(
    "https://api-colombia.com/api/v1/President"
  );
  state(presidents.data);
};

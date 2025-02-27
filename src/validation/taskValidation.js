import * as Yup from "yup";

export const taskSchema = Yup.object().shape({
  title: Yup.string().min(3,"Title must be at least 3 characters").required("Title is required"),
  due_date: Yup.date().required("Due date is required"),
});

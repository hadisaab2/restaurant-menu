import * as yup from "yup";

export const enCategorySchema = yup.object().shape({
  en_category: yup.string().required("Required field"),
  priority: yup.string().required("Required field"),
});

export const arCategorySchema = yup.object().shape({
  ar_category: yup.string().required("Required field"),
  priority: yup.string().required("Required field"),

});

export const EnArCategorySchema = yup.object().shape({
  en_category: yup.string().required("Required field"),
  ar_category: yup.string().required("Required field"),
  priority: yup.string().required("Required field"),

});

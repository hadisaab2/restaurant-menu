import * as yup from "yup";

export const enProductSchema = yup.object().shape({
  en_name: yup.string().required("Required field"),
  en_description: yup.string().optional(),
  en_price: yup.string().optional(),
  category_id: yup.number().required("Required field"),
  priority: yup.number().required("Required field"),
  cover_id: yup.string().required("Required field"),
  menu_visibility: yup.string().oneOf(['both', 'dine_in', 'delivery']).optional(),
  delivery_price: yup.string().optional().nullable(),
});

export const arProductSchema = yup.object().shape({
  ar_name: yup.string().required("Required field"),
  ar_description: yup.string().optional(),
  category_id: yup.number().required("Required field"),
  priority: yup.number().required("Required field"),
  en_price: yup.string().optional(),
  cover_id: yup.string().required("Required field"),
  menu_visibility: yup.string().oneOf(['both', 'dine_in', 'delivery']).optional(),
  delivery_price: yup.string().optional().nullable(),
});

export const EnArProductSchema = yup.object().shape({
  ar_name: yup.string().required("Required field"),
  ar_description: yup.string().optional(),
  en_name: yup.string().required("Required field"),
  en_description: yup.string().optional(),
  en_price: yup.string().optional(),
  category_id: yup.number().required("Required field"),
  priority: yup.number().required("Required field"),
  cover_id: yup.string().required("Required field"),
  menu_visibility: yup.string().oneOf(['both', 'dine_in', 'delivery']).optional(),
  delivery_price: yup.string().optional().nullable(),
});

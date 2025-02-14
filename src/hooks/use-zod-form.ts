//Этот код — кастомный хук useZodForm для управления формами с React Hook Form и валидацией через Zod,
//плюс он интегрируется с React Query для отправки данных на сервер.

import { UseMutateFunction } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodSchema } from "zod";

const useZodForm = (
  schema: ZodSchema, //Zod-схема для валидации
  mutation: UseMutateFunction, //Функция мутации из React Query (например, запрос на сервер)
  defaultValues?: any //Значения по умолчанию для формы
) => {
  const {
    register, // Подключает инпуты к React Hook Form
    formState: { errors }, // Ошибки валидации
    handleSubmit, // Обработчик отправки формы
    watch, // Следит за изменениями полей
    reset, // Сброс формы
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema), // Zod валидация
    defaultValues: {
      // Заполняем начальные значения
      ...defaultValues, //Здесь принимается объект
    },
  });

  //handleSubmit → сначала валидирует данные через Zod.
  //Если всё ок, то вызывает mutation(values), отправляя данные на сервер (или другое действие).
  //Возвращаемый объект можно использовать в компонентах для работы с формой.
  const onFormSubmit = handleSubmit(async (values) => mutation({ ...values }));
  return {
    register,
    errors,
    onFormSubmit,
    watch,
    reset,
  };
};

export default useZodForm;

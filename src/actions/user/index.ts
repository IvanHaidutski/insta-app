//В этой папке записываются все функции, которые касаются пользователя и выполняются на сервере

"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser, findUser } from "./queries";
import { refreshToken } from "@/lib/fetch";
import { updateIntegrations } from "../integrations/queries";

//Фунция ниже проверяет или пользователь авторизирован
export const onCurrentUser = async () => {
  const user = await currentUser(); //Получение текущего юзера с помощью ф-и из Clerk
  if (!user) return redirect("/sign-in"); //Если юзер не найден, перенаправление на страницу авторизации

  return user;
}; 
  //Ф-я возвращает текущего юзера. 
  // {
  //   "id": "user_abc123",
  //   "firstName": "Ivan",
  //   "lastName": "Petrov",
  //   "primaryEmailAddressId": "email_456",
  //   "emailAddresses": [
  //     { "id": "email_456", "emailAddress": "ivan@example.com" }
  //   ],
  //   "username": "ivan_p",
  //   "imageUrl": "https://clerk.dev/avatar.png",
  //   "publicMetadata": {},
  //   "privateMetadata": {},
  //   "createdAt": "2024-02-14T10:00:00Z"
  // }


//Что делает следующая функция?
export const onBoardUser = async () => {
  const user = await onCurrentUser();
  try {
    const found = await findUser(user.id);
    if (found) {
      if (found.integrations.length > 0) {
        const today = new Date();
        const time_left =
          found.integrations[0].expiresAt?.getTime()! - today.getTime();

        const days = Math.round(time_left / (1000 * 3600 * 24));
        if (days < 5) {
          console.log("refresh");

          const refresh = await refreshToken(found.integrations[0].token);
          const expire_date = today.setDate(today.getDate() + 60);

          const update_token = await updateIntegrations(
            refresh.acces_token,
            new Date(expire_date),
            found.integrations[0].id
          );
          if (!update_token) {
            console.log("Update token failed");
          }
        }
      }
      return {
        status: 200,
        data: {
          firstname: found.firstname,
          lastname: found.lastname,
        },
      };
    }
    const created = await createUser(
      user.id,
      user.firstName!,
      user.lastName!,
      user.emailAddresses[0].emailAddress
    );
  } catch (error) {
    console.log(error);
    return { status: 500 };
  }
};

export const onUserInfo = async () => {
  const user = await onCurrentUser();
  try {
    const profile = await findUser(user.id);
    if (profile) return { status: 200, data: profile };

    return { status: 404 };
  } catch (error) {
    return { status: 500 };
  }
};

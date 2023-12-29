import Auth from "../../pages/Auth.tsx";
import FirstPage1 from "../../pages/FirstPage1.tsx";
import FirstPage2 from "../../pages/FirstPage2.tsx";
import SecondPage1 from "../../pages/SecondPage1.tsx";
import IRouting from "./IRouting.ts";

export const publicRouting: IRouting[] = [
  {
    path: '/login',
    component: Auth
  },
  {
    path: '/registration',
    component: Auth
  }
]
export const firstRouting: IRouting[] = [
  {
    path: 'fro',
    component: FirstPage1
  },
  {
    path: 'frs',
    component: FirstPage2
  }
]
export const secondRouting: IRouting[] = [
  {
    path: 'sro',
    component: SecondPage1
  }
]
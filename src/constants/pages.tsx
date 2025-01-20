import {HomeDuoToneBlue, 
  AutomationDuoToneBlue,
  ContactsDuoToneBlue,
  RocketDuoToneBlue,
  SettingsDuoToneWhite,
} from "@/icons";

export const PAGE_BREAD_CRUMBS: string[] = [
  "contacts",
  "automations",
  "integrations",
  "settings",
];

type Props = {
  [page in string]: React.ReactNode;
};

export const PAGE_ICON: Props = {
  AUTOMATION: <AutomationDuoToneBlue />,
  CONTACTS: <ContactsDuoToneBlue />,
  INTEGRATIONS: <RocketDuoToneBlue />,
  SETTINGS: <SettingsDuoToneWhite />,
  HOME: <HomeDuoToneBlue />,
};

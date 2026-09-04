import { localeString } from "./objects/localeString";
import { localeText } from "./objects/localeText";
import { localeStringList } from "./objects/localeStringList";
import { expertise } from "./documents/expertise";
import { teamMember } from "./documents/teamMember";
import { project } from "./documents/project";
import { siteSettings } from "./documents/siteSettings";

export const schemaTypes = [
  localeString,
  localeText,
  localeStringList,
  siteSettings,
  expertise,
  teamMember,
  project,
];

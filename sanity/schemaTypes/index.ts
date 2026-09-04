import { localeString } from "./objects/localeString";
import { localeText } from "./objects/localeText";
import { localeStringList } from "./objects/localeStringList";
import { photo } from "./objects/photo";
import { expertise } from "./documents/expertise";
import { teamMember } from "./documents/teamMember";
import { project } from "./documents/project";
import { siteSettings } from "./documents/siteSettings";

export const schemaTypes = [
  localeString,
  localeText,
  localeStringList,
  photo,
  siteSettings,
  expertise,
  teamMember,
  project,
];

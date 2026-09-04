import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenu Prestige")
    .items([
      S.listItem()
        .title("Fiche signalétique")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      S.documentTypeListItem("expertise").title("Expertises"),
      S.documentTypeListItem("teamMember").title("Équipe"),
      S.documentTypeListItem("project").title("Références / Projets"),
    ]);

import { CardTool } from "./CardTool";

export default {
  title: "Webtool/CardTool",
  component: CardTool,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "3em" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

const data = {
  icon: "webtool-calculator",
  scope: "public",
  created: "Créé le 02 août 2022, 10:55",
  title: "Inter haec Orfitus",
  link: "http://www.reportpaiementsonss.be/",
  description:
    "Exsistit autem hoc loco quaedam quaestio subdifficilis, numt antep uaestio subdi quando amici subdi qua autem hoc loco quaedam quaestio subdifficilis, numt antep uaestio subdi q",
  tag: "Juridique",
  organization: "Par Deg & Partners Consulting Company",
  source: "Bibliothèque FFF",
};
const dataFavorite = {
  icon: "webtool-user",
  scope: "partagé",
  created: "Créé le 02 août 2022, 10:55",
  title: "Inter haec Orfitus Inter haec hae Orfitus Inter haec Orfitus",
  link: "www.reportpaiementsonss.be/fr/Orfitus-Inter-haec-Orfitus",
  description:
    "Exsistit autem hoc loco quaedam quaestio subdifficilis, numt antep uaestio subdi quando amici subdi qua autem hoc loco quaedam quaestio subdifficilis, numt antep uaestio subdi q",
  tag: "Juridique",
  organization: "Par Deg & Partners Consulting Company",
  source: "Bibliothèque FFF",
};

export const CardToolDefault = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-6 large-4">
        <CardTool
          lng="fr"
          data={data}
          scope="collaborator"
          color={"#FFB340"}
          loadingActions={{ share: true }}
          allowedActions={{ favorite: true, share: true }}
          isFavorite={true}
          onReach={() => console.log("handleReachCard")}
          onShare={() => console.log("handleShareCard")}
          onDelete={() => console.log("handleDeleteCard")}
          onUpdate={() => console.log("handleUpdateCard")}
          onAddFavorite={() => console.log("handleAddFavoritCard")}
          setTooltipVisibility={() => console.log("setTooltipVisibility1")}
        />
      </div>
    </div>
  </div>
);

export const CardToolTransparent = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-6 large-4">
        <CardTool
          data={data}
          color={"#FFB340"}
          transparent
          isFavorite={false}
          onReach={() => console.log("handleReachCard")}
          onShare={() => console.log("handleShareCard")}
          onDelete={() => console.log("handleDeleteCard")}
          onUpdate={() => console.log("handleUpdateCard")}
          onAddFavorite={() => console.log("handleAddFavoritCard")}
          setTooltipVisibility={() => console.log("setTooltipVisibility2")}
        />
      </div>
    </div>
  </div>
);

export const CardToolShared = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-6 large-4">
        <CardTool
          data={dataFavorite}
          color={"#4695DB"}
          displayTooltip
          toolContent={<span>Tooltip content</span>}
          isFavorite={true}
          allowedActions={{ share: true, more: true, unshare: true }}
          onReach={() => console.log("handleReachCard")}
          onShare={() => console.log("handleShareCard")}
          onDelete={() => console.log("handleDeleteCard")}
          onUpdate={() => console.log("handleUpdateCard")}
          onAddFavorite={() => console.log("handleAddFavoritCard")}
          setTooltipVisibility={(val) =>
            console.log("setTooltipVisibility3", val)
          }
        />
      </div>
    </div>
  </div>
);
